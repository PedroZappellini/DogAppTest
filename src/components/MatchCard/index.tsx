import React from 'react';
import {Image, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

interface MatchCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  id,
  name,
  description,
  image,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContent}>
        <Image
          source={{uri: image}}
          style={styles.image}
          resizeMode="stretch"
        />
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 1)']}
          style={styles.gradient}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default MatchCard;
