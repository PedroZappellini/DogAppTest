import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ballIcon from '../../assets/tennis.png';

import {DefaultTheme} from '../../themes';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {FlatList, Gesture, GestureDetector} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextButton from '../../components/TextButton';
import MatchCard from '../../components/MatchCard';

import styles from './styles';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

import {list} from '../../data';

const Home: React.FC = () => {
  const translateX = useSharedValue(0);
  const context = useSharedValue({x: 0});
  const dim = useSharedValue(0);

  const onMenuGesture = Gesture.Pan()
    .onStart(event => {
      context.value = {x: translateX.value};
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      console.log(event.translationX);
    })
    .onEnd(() => {
      if (translateX.value <= SCREEN_WIDTH / 3) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(SCREEN_WIDTH / 2);
      }
    });

  const rPageStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 2.5],
      Extrapolate.CLAMP,
    );

    const radius = interpolate(
      translateX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 15],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius: radius,
      transform: [
        {translateX: translateX.value},
        {perspective: 100},
        {rotateY: `${-rotate}deg`},
      ],
    };
  }, []);

  const onImageGesture = Gesture.Pan().onUpdate(event => {
    console.log(event.translationX);
  });

  const onPressMenuIcon = () => {
    if (translateX.value === 0) {
      translateX.value = withTiming(SCREEN_WIDTH / 2);
    } else {
      translateX.value = withTiming(0);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuBar}>
        <TextButton title="Menu" />
        <TextButton
          title="Perfil"
          subtitle
          children={
            <AntDesign
              name="user"
              size={20}
              color={DefaultTheme.colors.white}
            />
          }
        />
        <TextButton title="Menu" subtitle />
        <TextButton title="Menu" subtitle />
        <TextButton title="Menu" subtitle />
        <TextButton title="Menu" subtitle />
      </View>
      <Animated.View style={[styles.pageContainer, rPageStyle]}>
        <GestureDetector gesture={onMenuGesture}>
          <Feather
            onPress={onPressMenuIcon}
            name="menu"
            color={DefaultTheme.colors.black}
            size={24}
            style={styles.menu}
          />
        </GestureDetector>
        <View style={styles.matchPageTitleContainer}>
          <Text style={styles.matchPageTitle}>Trending</Text>
          <Image
            source={ballIcon}
            resizeMode="contain"
            style={{width: 40, height: 40}}
          />
        </View>
        <View style={styles.listContainer}>
          <GestureDetector gesture={onImageGesture}>
            <Animated.FlatList
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={list}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <MatchCard
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                );
              }}
            />
          </GestureDetector>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;
