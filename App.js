import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox, Image } from 'react-native';

import * as Font from 'expo-font';

import LoginScreen from './Screens/auth/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen/RegistrationScreen';
// import PostsScreen from './Screens/main/PostsScreen/PostsScreen';
// import CreatePostsScreen from './Screens/main/CreatePostsScreen/CreatePostsScreen';
// import ProfileScreen from './Screens/main/ProfileScreen/ProfileScreen';
import CommentsScreen from './Screens/main/CommentsScreen/CommentsScreen';
import HomeScreen from './Screens/main/HomeScreen/HomeScreen';
import { Container, Header } from './components';
import userExample from './example/userExample';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
// const MainTab = createBottomTabNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  const [ isReady, setIsReady ] = useState(false);
  const [ user, setUser ] = useState(userExample);
  const [ isAuth, setIsAuth ] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"), //500
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"), //400
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"), //700
          "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"), //500
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      };
    };

    loadFonts();
  }, [setIsReady]);

  const handleAuth = () => setIsAuth(isAuth => !isAuth);

  if (!isReady) {
    return <Container/>;
  };

  return <NavigationContainer>
    {isAuth 
      ? <MainStack.Navigator initialRouteName='HomeScreen'>
        <AuthStack.Screen
          name={'HomeScreen'}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
          initialParams={{
            handleAuth,
          }}
        />
        <AuthStack.Screen
          name={'CommentsScreen'}
          component={CommentsScreen}
          options={{
            header: ({navigation}) => <Header title={"Коментарі"} back={navigation.goBack}/>,
          }}
        />
      </MainStack.Navigator>
      : <AuthStack.Navigator initialRouteName='LoginScreen'>
        <AuthStack.Screen
          name={'LoginScreen'}
          component={LoginScreen}
          initialParams={{
            handleSubmit: handleAuth,
          }}
          options={{
            headerShown: false,
          }}/>
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
      </AuthStack.Navigator>
    }
  </NavigationContainer>;
};