import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function ListItem({ item, title, isSelected, onSelectItem }) {
    let style = styles.text;
    if (isSelected) {
        style = {...style, ...styles.selected};
    }

    const onPress = useCallback(() => onSelectItem(item), [item])

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={style}>{title}</Text>
        </TouchableOpacity>
    );
}
