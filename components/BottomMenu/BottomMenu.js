import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button } from '../Button/Button';
import images from '../../res/images';

export function BottomMenu() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonGroup}>
                <Button icon={images.plus} containerStyle={styles.button} iconStyle={styles.buttonIcon}/>
                <Button icon={images.profile} containerStyle={styles.button} iconStyle={styles.buttonIcon}/>
                <Button icon={images.attach} containerStyle={styles.button} iconStyle={styles.buttonIcon}/>
                <Button icon={images.alarm} containerStyle={styles.button} iconStyle={styles.buttonIcon}/>
                <Button icon={images.mic} containerStyle={styles.button} iconStyle={styles.buttonIcon}/>
            </View>
            <Button icon={images.anim} containerStyle={styles.customButton} iconStyle={styles.customIcon}/>
        </View>
    );
}
