import { StyleSheet } from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.buttonBorder,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        height: 12,
        resizeMode: 'contain',
    },
});

