import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox, Image } from 'react-native';

import * as Font from 'expo-font';

import LoginScreen from './Screens/auth/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen/RegistrationScreen';
import PostsScreen from './Screens/main/PostsScreen/PostsScreen';
import CreatePostsScreen from './Screens/main/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from './Screens/main/ProfileScreen/ProfileScreen';
import CommentsScreen from './Screens/main/CommentsScreen/CommentsScreen';
import { Container, Header } from './components';
import userExample from './example/userExample';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

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

  const HomeScreen = () => <MainTab.Navigator
  initialRouteName='ProfileScreen'
  screenOptions={{
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 83,
      backgroundColor: "#FFFFFF",
      shadowOffset: {
        height: -0.5,
      },
      shadowOpacity: 0.3,
    },
    tabBarHideOnKeyboard: true,
  }}
>
  <MainTab.Screen
    name={"PostsScreen"}
    component={PostsScreen}
    initialParams={{user}}
    options={{
      header: () => <Header title={"Публікації"} logOut={handleAuth}/>,
      tabBarItemStyle: {
        paddingTop: 17,
        paddingBottom: 42,
        paddingRight: 12,
        alignItems: "flex-end"
      },
      tabBarIcon: () => <Image
        source={require('./assets/img/grid.png')}
        style={{
          height: 24,
          width: 24,
        }}
      />
    }}
  />
  <MainTab.Screen
    name={"CreatePostsScreen"}
    component={CreatePostsScreen}
    initialParams={{user}}
    options={{
      header: ({navigation}) => <Header title={"Створити публікацію"} back={navigation.goBack}/>,
      tabBarItemStyle: {
        paddingTop: 9,
        paddingBottom: 34,
        alignItems: "center"
      },
      tabBarIcon: () => <Image
        source={require('./assets/img/new.png')}
        style={{
          height: 40,
          width: 70,
        }}
      />,
      tabBarStyle: {
        display: 'none',
      }
    }}
  />
  <MainTab.Screen
    name={"ProfileScreen"}
    component={ProfileScreen}
    initialParams={{user}}
    options={{
      headerShown: false,
      tabBarItemStyle: {
        paddingTop: 17,
        paddingBottom: 42,
        paddingLeft: 12,
        alignItems: "flex-start"
      },
      tabBarIcon: () => <Image
        source={require('./assets/img/user.png')}
        style={{
          height: 24,
          width: 24,
        }}
      />,
    }}
  />
  </MainTab.Navigator>;
  
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