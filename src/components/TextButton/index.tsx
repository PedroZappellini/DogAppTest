import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface TextButtonProps {
  title: string;
  subtitle?: boolean;
  children?: React.ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({title, subtitle, children}) => {
  return (
    <TouchableOpacity style={styles.container}>
      {children}
      <Text
        style={[
          styles.title,
          {fontSize: subtitle ? 20 : 32, marginLeft: children ? 10 : 0},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
