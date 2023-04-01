import {StyleSheet} from 'react-native';
import {DefaultTheme} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: DefaultTheme.colors.initialBackground,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 40,
  },
  menu: {
    position: 'absolute',
    top: '5%',
    left: '5%',
  },
  menuBar: {
    position: 'absolute',
    height: '90%',
    width: '40%',
    alignSelf: 'center',
    padding: 20,
  },
  menuBarTitle: {
    color: DefaultTheme.colors.white,
    fontSize: 24,
    fontWeight: '700',
  },
  menuBarSubtitle: {
    color: DefaultTheme.colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  matchPageTitleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  matchPageTitle: {
    color: DefaultTheme.colors.white,
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 20,
  },
  listContainer: {
    marginTop: 40,
  },
});

export default styles;
