import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    Platform,
    StatusBar,
    StyleSheet,
    Linking,
    Dimensions,
    Alert
} from 'react-native';
import Context from '../../../context/store/userStore';
import {
    APP_COLOR,
    SECONDARY_COLOR,
    SMALL_TEXT_FONT_SIZE,
    TEXT_FONT,
    TEXT_FONT_SIZE,
    TITLE_FONT,
    TITLE_FONT_SIZE
} from '../../commonStyle';
import MyButton from '../common/myButton/myButton';
import MyTextInput from '../common/myTextInput/myTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const height = Dimensions.get('window').height;

function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, dispatch } = useContext(Context);

    const createNewUser = () => {
        if (email.length == 0 || email.length < 5 || password.length == 0) {
            Alert.alert('Warning', 'Please write your data')
            dispatch({ type: "LOGIN", payload: false })
        } else {
            dispatch({ type: "SET_EMAIL", payload: email })
            dispatch({ type: "SET_PASSWORD", payload: password })
            dispatch({ type: "LOGIN", payload: true })
        }

    }

    return (
        <KeyboardAwareScrollView
            extraHeight={200}
            enableOnAndroid={true}
            style={style.container}>
            <View style={style.wrapper}>
                <View style={style.titleBox}>
                    <Text style={style.title}>Create an account</Text>
                    <Text style={style.titleBottomText}>Don’t worry, it’s just a few minutes</Text>
                </View>
                <View style={style.secondBox}>
                    <Text>{null}</Text>
                    <View>
                        <MyTextInput
                            placeholder={'Email address'}
                            name={'mail'}
                            keyboardType={'email-address'}
                            autoCorrect={false}
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text)

                            }}
                        />
                    </View>
                    <View style={style.bottom}>
                        <MyTextInput
                            placeholder={'Password'}
                            keyboardType={'default'}
                            name={'lock'}
                            autoCorrect={false}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => {
                                setPassword(text)
                            }}
                        />
                    </View>
                    <View style={style.bottom}>
                        <MyButton
                            text={'Create my account'}
                            onPress={createNewUser}
                        />
                    </View>

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
                            by creating an account.
                        </Text>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
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
        flexDirection: 'column'
    },
    titleBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: '15%',
        paddingBottom: '5%'
    },
    title: {
        fontSize: TITLE_FONT_SIZE,
        fontFamily: TITLE_FONT,
        color: APP_COLOR,
        paddingTop: 14,
    },
    titleBottomText: {
        fontSize: TEXT_FONT_SIZE,
        fontFamily: TEXT_FONT,
        color: APP_COLOR,
    },
    secondBox: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: '55%',
        height: height * .6,
    },
    bottom: {
        marginTop: 14,
        width: '100%'
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

export default Register;