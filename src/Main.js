import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import Store from './store/Store'
import ScreenView from './screen2/ScreenView';
import ScreenWait from './screen1/ScreenWait'
import CreateScreen from './screen4/CreateScreen';
import OtpScreen from './screen5/OtpScreen';
import Login from './screen3/Login'
import GetNumber from './screen6/GetNumber';

const Stack = createNativeStackNavigator()
function Screen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Start'
                    component={ScreenWait}
                    options={{ headerShown: false }} />
                <Stack.Screen name='PagerView'
                    component={ScreenView}
                    options={{ headerShown: false }} />
                <Stack.Screen name='Login'
                    component={Login}
                    options={{ headerShown: false }} />
                <Stack.Screen name='Create'
                    component={CreateScreen}
                    options={{ headerShown: false }} />
                     <Stack.Screen name='GetNumber'
                    component={GetNumber}
                    options={{ headerShown: false }} />
                <Stack.Screen name='Otp'
                    component={OtpScreen}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Main = () => {
    return (
        <Provider store={Store}>
            <Screen />
        </Provider>
    )
}
export default Main