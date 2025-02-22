import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface IIconComponent {
    name: string;
    color: string;
}

export const IconComponent = ({name, color}: IIconComponent) => {
    return (
        <FontAwesome name={name} color={color} size={25} />
    )
};
