import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home/home';
import Welcome from '../welcome/welcomeScreen';
import Register from '../register/register';
import Login from '../login/login';
import ForgotPassword from '../forgotPassword/forgotPassword';
import { SECONDARY_COLOR } from '../../constant/commonStyle';
import CustomHeaderLeft from '../../constant/components/common/customHeaderLeft/customHeaderLeft';
import Context from '../../context/store/userStore';


export default Navigation = ({ navigation }) => {
    const { state } = useContext(Context);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                {
                    state.isLoggedIn ? (
                        <>
                            <Stack.Screen
                                options={({ navigation, route }) => ({
                                    headerTitle: '',
                                    headerTransparent: false,
                                    headerShadowVisible: false,
                                    headerStyle: {
                                        backgroundColor: SECONDARY_COLOR,
                                    },
                                })}
                                name="Home"
                                component={Home}
                            />
                        </>
                    ) : (
                        <>
                            <Stack.Screen
                                options={({ navigation, route }) => ({
                                    headerTitle: '',
                                    headerShown: Platform.OS === 'ios' ? true : false,
                                    headerTransparent: true,
                                })}
                                name="Welcome"
                                component={Welcome}
                            />
                            <Stack.Screen
                                options={({ navigation, route }) => ({
                                    headerTitle: '',
                                    headerLeft: () => (
                                        <CustomHeaderLeft onPress={() => navigation.goBack(null)} />
                                    ),
                                    headerTransparent: false,
                                    headerShadowVisible: false,
                                    headerStyle: {
                                        backgroundColor: SECONDARY_COLOR,
                                    },
                                })}
                                name="Register"
                                component={Register}
                            />
                            <Stack.Screen
                                options={({ navigation, route }) => ({
                                    headerTitle: '',
                                    headerLeft: () => (
                                        <CustomHeaderLeft onPress={() => navigation.goBack(null)} />
                                    ),
                                    headerTransparent: false,
                                    headerShadowVisible: false,
                                    headerStyle: {
                                        backgroundColor: SECONDARY_COLOR,
                                    },
                                })}
                                name="Login"
                                component={Login}
                            />
                            <Stack.Screen
                                options={({ navigation, route }) => ({
                                    headerTitle: '',
                                    headerLeft: () => (
                                        <CustomHeaderLeft onPress={() => navigation.goBack(null)} />
                                    ),
                                    headerTransparent: false,
                                    headerShadowVisible: false,
                                    headerStyle: {
                                        backgroundColor: SECONDARY_COLOR,
                                    },
                                })}
                                name="ForgotPassword"
                                component={ForgotPassword}
                            />
                        </>
                    )
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Stack = createNativeStackNavigator();