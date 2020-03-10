import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 72,
        backgroundColor: '#FFF',
        marginVertical: 16,
        borderRadius: 76,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    buttonGroup: {
        flexDirection: 'row',
    },
    button: {
        marginRight: 10,
        backgroundColor: '#E7F8FA',
        borderWidth: 0,
    },
    customButton: {
        borderWidth: 0,
    },
    lastButton: {
        alignSelf: 'flex-end',
    },
    buttonIcon: {
        height: 18,
    },
    customIcon: {
        width: '100%',
        height: '100%',
    },
});

