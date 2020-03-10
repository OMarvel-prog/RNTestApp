import { StyleSheet } from 'react-native';
import colors from '../../../../res/colors';

export default StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.buttonBorder,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.textColor,
        fontSize: 16,
        fontWeight: '500'
    },
    selected: {
        fontWeight: '700'
    }
});

