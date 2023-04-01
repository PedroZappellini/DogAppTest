import React, {useEffect} from 'react';

import {Image, Text, View} from 'react-native';

import LottieView from 'lottie-react-native';

import logoImg from '../../assets/DoggIn.png';
import animatedLogo from '../../assets/animationLogo.json';

import Button from '../../components/Button';

import styles from './styles';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useNavigation, useIsFocused} from '@react-navigation/native';

const InitialScreen: React.FC = () => {
  const focused = useIsFocused();
  const navigation = useNavigation();
  const translateY = useSharedValue(-100);
  const buttonScale = useSharedValue(0);

  useEffect(() => {
    translateY.value = focused ? withSpring(0) : -100;
    buttonScale.value = focused ? withSpring(1) : 0;
  }, [focused]);

  const rImageStyle = useAnimatedStyle(() => {
    return {
      opacity: focused ? 1 : 0,
      transform: [{translateY: translateY.value}],
    };
  });

  const rButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: interpolate(buttonScale.value, [0, 1], [0, 1])}],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.Image
        source={logoImg}
        style={[styles.logoImage, rImageStyle]}
      />
      <LottieView
        useNativeLooping
        renderMode="SOFTWARE"
        source={animatedLogo}
        resizeMode="contain"
        autoPlay
        loop
        style={{width: '80%'}}
      />
      <Text style={styles.title}>
        Quer achar a companhia perfeita para você? Com o DoggIn você pode
        encontrar o doguinho que mais se encaixa com o seu perfil
      </Text>
      <Animated.View style={[styles.buttonContainer, rButtonStyle]}>
        <Button onPress={() => navigation.navigate('Home')} title="Iniciar" />
      </Animated.View>
    </View>
  );
};

export default InitialScreen;
