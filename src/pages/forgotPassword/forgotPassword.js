import React, { useState, useContext } from 'react';
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
import {
    APP_COLOR,
    SECONDARY_COLOR,
    SMALL_TEXT_FONT_SIZE,
    TEXT_FONT,
    TEXT_FONT_SIZE,
    TITLE_FONT,
    TITLE_FONT_SIZE
} from '../../constant/commonStyle';
import MyButton from '../../constant/components/common/myButton/myButton';
import MyTextInput from '../../constant/components/common/myTextInput/myTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const height = Dimensions.get('window').height;


function ForgotPassword({ navigation }) {
    const [email, setEmail] = useState('')
    const { state } = useContext(Context);

    const passwordControl = () => {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!email.match(pattern)) {
            Alert.alert('Opps!', 'Please, write a valid email')
        }
        else if (email != state.email) {
            Alert.alert('Check please', 'Email address was not found')
        } else {
            (email === state.email)
            Alert.alert('Your password', state.password)
        }
    }

    return (
        <KeyboardAwareScrollView
            extraHeight={200}
            enableOnAndroid={true}
            style={style.container}>
            <View style={style.wrapper}>
                <View style={style.titleBox}>
                    <Text style={style.title}>Forgot Password</Text>
                    <Text style={style.titleBottomText}>After entering your email address,</Text>
                    <Text style={style.titleBottomText}>we will show your password.</Text>
                </View>
                <View style={style.secondBox}>
                    <View>
                        <MyTextInput
                            placeholder={'Email address'}
                            name={'mail'}
                            keyboardType={'email-address'}
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text)
                            }}
                        />
                    </View>
                    <View style={style.bottom}>
                        <MyButton
                            text={'Submit'}
                            onPress={passwordControl}
                        />
                    </View>

                    <View style={style.textBox}>
                        <Text style={style.text} onPress={() => Linking.openURL('https://www.instagram.com/aboutpersonalstuff/')}>
                            Support request
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
    },
    secondBox: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: '70%',
        height: height * .6,
    },
    errorMessage: {
        color: APP_COLOR,
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

export default ForgotPassword;