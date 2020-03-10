import React from 'react';
import styles from './styles';
import { Image, TouchableOpacity } from 'react-native';

export function Button({onPress, icon, containerStyle, iconStyle}) {
 return (
     <TouchableOpacity style={{...styles.button, ...containerStyle}} onPress={onPress}>
         <Image style={{...styles.buttonIcon, ...iconStyle}} source={icon}/>
     </TouchableOpacity>
 );
}
