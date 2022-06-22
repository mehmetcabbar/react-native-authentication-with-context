import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import IconBack from '../../../images/iconBack.svg';


function CustomHeaderLeft({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style.container}>
            <IconBack width={24} height={24} />
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
    },
});

export default CustomHeaderLeft;