import {StyleSheet} from 'react-native'; 
import { DefaultTheme } from '../../themes';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: DefaultTheme.colors.button,
        borderRadius:  25,
    },
    title: {
        color: DefaultTheme.colors.white,
        fontSize: 16,
        fontWeight: '600'

    }

})

export default styles;