import React, { useState, useCallback } from 'react';
import { Text, Image, TouchableOpacity, FlatList, Modal } from 'react-native';
import { ListItem } from './components/ListItem/ListItem';
import styles from './styles';
import images from '../../res/images';

export function Dropdown({selectedValueTitle, selectedValue, onValueChange, initialItemTitle, data, containerStyle}) {

    const [isModalVisible, setModalVisible] = useState(false);

    const onModalVisibilityChanged =
        useCallback(() => setModalVisible(!isModalVisible), [isModalVisible]);

    const onSelectItem = useCallback((selectedItem) => {
        onValueChange(selectedItem);
        setModalVisible(false);
    }, [isModalVisible, selectedValue]);

    const renderItem = useCallback(({ item }) =>
        <ListItem
            isSelected={selectedValue ? selectedValue._id === item._id : false}
            item={item}
            onSelectItem={onSelectItem}
            title={item.translations.en}
        />,
        [selectedValue],
    );

    return (
        <>
            <TouchableOpacity style={{...styles.container, ...containerStyle}} onPress={onModalVisibilityChanged}>
                <Text style={styles.text}>{selectedValueTitle || initialItemTitle}</Text>
                <Image source={images.arrow}/>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isModalVisible}
                onRequestClose={onModalVisibilityChanged}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
            </Modal>
        </>
    );
}