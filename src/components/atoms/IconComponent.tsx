import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface IIconComponent {
    name: string;
    color: string;
    size: number;
    onPress?: () => void;
}

export const IconComponent = ({name, color, size, onPress}: IIconComponent) => {
    return (
        <FontAwesome name={name} color={color} size={size} onPress={onPress} />
    )
};
