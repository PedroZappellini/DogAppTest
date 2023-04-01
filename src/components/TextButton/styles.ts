import {StyleSheet} from 'react-native';
import {DefaultTheme} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  title: {
    color: DefaultTheme.colors.white,
    fontWeight: '700',
  },
});

export default styles;
