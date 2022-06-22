import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Platform, StatusBar,
    StyleSheet,
    Linking
} from 'react-native';
import {
    APP_COLOR,
    SECONDARY_COLOR,
    SMALL_TEXT_FONT_SIZE,
    TEXT_FONT, TITLE_FONT,
    TITLE_FONT_SIZE
} from '../../commonStyle';
import LoginImage from '../../images/logoIcon.svg';
import MyButton from '../common/myButton/myButton';
import MyWhiteButton from '../common/myWhiteButton/myWhiteButton';
import Context from '../../../context/store/userStore';

function Welcome({ navigation }) {
    const { state, dispatch } = useContext(Context)


    return (
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <View style={style.imageBox}>
                    <LoginImage />
                    <Text style={style.title}>AuthSteps</Text>
                    <Text></Text>
                </View>

                <View style={style.secondBox}>
                    <MyButton
                        text={'I am new here'}
                        onPress={() => navigation.navigate('Register')}
                    />
                    <MyWhiteButton
                        text={'Login to my account'}
                        onPress={() => navigation.navigate('Login')}
                    />
                    <View style={style.textBox}>
                        <Text style={style.text}>
                            You agree our <Text
                                style={style.textUnderline}
                                onPress={() => Linking.openURL('https://www.instagram.com/aboutpersonalstuff/')}>
                                Terms of Use
                            </Text>
                        </Text>
                        <Text
                            style={style.text}>
                            by sign in or sign up.
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        paddinTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: SECONDARY_COLOR,
        display: 'flex',
        flex: 1,
    },
    wrapper: {
        flex: 1,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 24,
    },
    imageBox: {
        flex: 1,
        alignItems: 'center',
        marginTop: '20%'
    },
    title: {
        fontSize: TITLE_FONT_SIZE,
        fontFamily: TITLE_FONT,
        color: APP_COLOR,
        paddingTop: 14,
    },
    secondBox: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
    },
    text: {
        color: APP_COLOR,
        fontSize: SMALL_TEXT_FONT_SIZE,
        fontFamily: TEXT_FONT,
    },
    textUnderline: {
        textDecorationLine: 'underline',
    }

});

export default Welcome;