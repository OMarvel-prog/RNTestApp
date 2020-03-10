import { StyleSheet } from 'react-native';
import colors from '../../res/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    pickerContainer: {
        backgroundColor: colors.componentsBg,
        borderRadius: 16,
        width: '100%',
        height: 162,
        paddingHorizontal: 16,
        flexDirection: 'row',
        paddingTop: 10
    },
    buttonContainer: {
        backgroundColor: colors.componentsBg,
        width: 72,
        height: 72,
        borderTopLeftRadius: 72 / 2,
        borderTopRightRadius: 72 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: -16,
        position: 'relative'
    },
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
        width: 12,
        height: 12,
    },
    negativeBorder: {
        position: 'absolute',
        borderRadius: 16,
        width: 40,
        height: 40,
        backgroundColor: colors.mainBg,
        top: 15,
        left: -40,
        zIndex: 2
    },
    positiveBorder: {
        position: 'absolute',
        borderRadius: 16,
        width: 40,
        height: 40,
        backgroundColor: colors.mainBg,
        top: 15,
        right: -40,
        zIndex: 2
    },
    helpContainer: {
        height: 24,
        position: 'absolute',
        bottom: 16,
        left: -14,
        right: -14,
        backgroundColor: colors.componentsBg
    },
    dropdown: {
        marginRight: 30
    }
});

