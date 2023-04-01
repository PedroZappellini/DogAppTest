import {StyleSheet} from 'react-native';
import {DefaultTheme} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: DefaultTheme.colors.background,
  },
  logoImage: {
    resizeMode: 'contain',
    height: 60,
  },
  title: {
    color: DefaultTheme.colors.white,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 40,
  },
});

export default styles;
