import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../Screens/main/HomeScreen/HomeScreen';
import CommentsScreen from '../../Screens/main/CommentsScreen/CommentsScreen';
import MapScreen from '../../Screens/main/MapScreen/MapScreen';

import { Header } from '../../components';

const MainStack = createStackNavigator();

const MainRoute = ({handleAuth}) => <MainStack.Navigator initialRouteName='HomeScreen'>
    <MainStack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
            headerShown: false,
        }}
        initialParams={{
            handleAuth,
        }}
    />
    <MainStack.Screen
        name={'CommentsScreen'}
        component={CommentsScreen}
        options={{
            header: ({navigation}) => <Header title={"Коментарі"} back={navigation.goBack}/>,
        }}
    />
    <MainStack.Screen
        name={'MapScreen'}
        component={MapScreen}
        options={{
            header: ({navigation}) => <Header title={"Локація"} back={navigation.goBack}/>,
        }}
    />
</MainStack.Navigator>;

export default MainRoute;