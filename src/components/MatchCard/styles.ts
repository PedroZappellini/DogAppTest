import {StyleSheet, Dimensions} from 'react-native';
import {DefaultTheme} from '../../themes';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 2,
    padding: 20,
  },
  cardContent: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.white,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 11,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 8,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 20,
    right: 10,
    left: 10,
  },
  name: {
    color: DefaultTheme.colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    color: DefaultTheme.colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
