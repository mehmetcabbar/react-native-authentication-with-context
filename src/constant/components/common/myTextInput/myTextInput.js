import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-ionicons';
import { APP_COLOR, TEXT_FONT, TEXT_FONT_SIZE } from '../../../commonStyle';



function MyTextInput({ placeholder, name, onChangeText, value, keyboardType, secureTextEntry }) {
    return (
        <View style={style.container}>
            <View style={style.inputIcon}>
                <Icon name={name} style={style.icon} />
            </View>
            <View style={style.inputTextBox}>
                <TextInput
                    style={style.textInput}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    keyboardType={keyboardType || false}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 30,
        borderColor: APP_COLOR,
        borderWidth: 1,
    },
    inputIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        width: 70,

    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        color: APP_COLOR,
        fontSize: 20,
    },
    inputTextBox: {
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        color: APP_COLOR,
        fontSize: TEXT_FONT_SIZE,
        fontFamily: TEXT_FONT,
    }


});

export default MyTextInput;