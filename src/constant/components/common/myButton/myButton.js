import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { APP_COLOR, BUTTON_FONT, BUTTON_FONT_SIZE, SECONDARY_COLOR, TITLE_FONT } from '../../../commonStyle';

function MyButton({ text, onPress }) {
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
        backgroundColor: APP_COLOR,
        height: 60,
        borderRadius: 30,
        width: '100%',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: SECONDARY_COLOR,
        fontSize: BUTTON_FONT_SIZE,
        fontFamily: BUTTON_FONT,

    }
});

export default MyButton;