import { StyleSheet } from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        borderBottomColor: colors.buttonBorder,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: colors.textColor,
        fontSize: 16,
        fontWeight: '500'
    },
});

