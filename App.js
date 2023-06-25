import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

import * as Font from 'expo-font';

import MainRoute from './routes/MainRoute/MainRoute';
import AuthRoute from './routes/AuthRoute/AuthRoute';
import { Container } from './components';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  const [ isReady, setIsReady ] = useState(false);
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
      ? <MainRoute handleAuth={handleAuth} />
      : <AuthRoute handleAuth={handleAuth} />
    }
  </NavigationContainer>;
};