import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, ImageBackground, Linking } from 'react-native';
import Context from '../../../context/store/userStore';
import { APP_COLOR, SECONDARY_COLOR, SMALL_TEXT_FONT_SIZE, TEXT_FONT, TEXT_FONT_SIZE, TITLE_FONT, TITLE_FONT_SIZE } from '../../commonStyle';
import MyButton from '../common/myButton/myButton';
import Avatar from '../../images/avatar.svg';
import FirstBubble from '../../images/firstBubbleForEmail.svg';
import SecondBuble from '../../images/secondBubbleForMyEmail.svg';



function Home({ navigation }) {
    const { state, dispatch } = useContext(Context);
    const [isLoggedIn, setIsLoggedIn] = useState('');

    const logOut = ({ navigation }) => {
        dispatch({ type: "LOGOUT", payload: false })
    }


    return (
        <SafeAreaView style={style.container}>
            <View style={style.wrapper}>
                <View style={style.imageBox}>
                    <Avatar />
                    <Text style={style.title}>It’s done</Text>
                    <Text style={{ color: 'black' }}></Text>
                    <Text style={style.titleBottomText}>I am very happy that you have </Text>
                    <Text style={style.titleBottomText}>completed all the steps.</Text>
                </View>
                <View style={style.secondBox}>
                    <View style={style.bubbleBox}>
                        <FirstBubble />
                        <View style={style.bubble}>
                            <Text style={style.bubbleTitle}>Your Email</Text>
                            <Text style={style.bubbleEmail}>{state.email}</Text>
                        </View>
                    </View>
                    <View style={style.bubbleBox}>
                        <SecondBuble />
                        <View style={style.bubble}>
                            <Text style={style.bubbleTitle}>My Email</Text>
                            <Text style={style.bubbleEmail}>mhmtcbbr@gmail.com</Text>
                        </View>
                    </View>
                    <View style={style.buttonBox}>
                        <MyButton
                            onPress={logOut}
                            text={'Log out'} />
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
        marginTop: '10%'
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
        flex: 1.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bubbleBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
        flex: 1,
    },
    bubble: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: -80
    },
    bubbleTitle: {
        fontSize: 24,
        fontFamily: TITLE_FONT,
        color: APP_COLOR,
    },
    bubbleEmail: {
        fontSize: TEXT_FONT_SIZE,
        fontFamily: TEXT_FONT,
    },
    buttonBox: {
        width: '100%',
        marginTop: '15%',
    }

});



export default Home;