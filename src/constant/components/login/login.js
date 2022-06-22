import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Platform,
    StatusBar,
    StyleSheet,
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

function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState();
    const { state, dispatch } = useContext(Context);

    const userLogin = () => {
        if (email.length == 0 || email.length < 5 || password.length == 0 || email != state.email || password != state.password) {
            Alert.alert('Opps!', 'Something is wrong. Please check your data')
            dispatch({ type: "LOGIN", payload: false })
        }
        else {
            (email === state.email && password === state.password)
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
                    <Text style={style.title}>Welcome back</Text>
                    <Text style={style.titleBottomText}>User info coming from Context API</Text>
                    <Text style={style.titleBottomText}>{state.email}</Text>
                    <Text style={style.titleBottomText}>{state.password}</Text>


                </View>
                <View style={style.secondBox}>
                    <View>
                        <MyTextInput
                            placeholder={'Email address'}
                            name={'mail'}
                            secureTextEntry={false}
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={(text) =>
                                setEmail(text)
                            }
                        />
                    </View>
                    <View style={style.bottom}>
                        <MyTextInput
                            placeholder={'Password'}
                            keyboardType={'default'}
                            name={'lock'}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) =>
                                setPassword(text)
                            }
                        />
                    </View>
                    <View style={style.bottom}>
                        <MyButton
                            text={'Login to my account'}
                            onPress={userLogin}
                        />
                    </View>

                    <View style={style.textBox}>
                        <Text style={style.text} onPress={() => navigation.navigate('ForgotPassword')}>
                            Forgot my password
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
        paddingTop: '10%',
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
        marginTop: '10%',
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

});

export default Login;