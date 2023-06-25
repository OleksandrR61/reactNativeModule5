import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../Screens/auth/LoginScreen/LoginScreen';
import RegistrationScreen from '../../Screens/auth/RegistrationScreen/RegistrationScreen';

const AuthStack = createStackNavigator();

const AuthRoute = ({handleAuth}) => <AuthStack.Navigator initialRouteName='LoginScreen'>
    <AuthStack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        initialParams={{
            handleSubmit: handleAuth,
        }}
        options={{
            headerShown: false,
        }}
    />
    <AuthStack.Screen
        name={'RegistrationScreen'}
        component={RegistrationScreen}
        initialParams={{
            handleSubmit: handleAuth,
        }}
        options={{
            headerShown: false,
        }}
    />
</AuthStack.Navigator>;

export default AuthRoute;