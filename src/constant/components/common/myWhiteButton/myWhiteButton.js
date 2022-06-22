import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { APP_COLOR, BUTTON_FONT, BUTTON_FONT_SIZE } from '../../../commonStyle';

function MyWhiteButton({ text, onPress }) {
    return (
        <View style={style.container}>
            <TouchableOpacity
                onPress={onPress}
                style={style.wrapper}>
                <Text style={style.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 60,
        borderRadius: 30,
        width: '100%',
        marginTop: 14,
        backgroundColor: 'white',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: APP_COLOR,
        fontSize: BUTTON_FONT_SIZE,
        fontFamily: BUTTON_FONT,

    }
});

export default MyWhiteButton;