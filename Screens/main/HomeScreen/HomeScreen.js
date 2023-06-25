import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

import { Header } from '../../../components';

const MainTab = createBottomTabNavigator();

const HomeScreen = ({route}) => <MainTab.Navigator
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
        options={{
            header: () => <Header title={"Публікації"} logOut={route.params.handleAuth}/>,
            tabBarItemStyle: {
                paddingTop: 17,
                paddingBottom: 42,
                paddingRight: 12,
                alignItems: "flex-end"
            },
            tabBarIcon: () => <Image
                source={require('../../../assets/img/grid.png')}
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
        options={{
            header: ({navigation}) => <Header title={"Створити публікацію"} back={navigation.goBack}/>,
            tabBarItemStyle: {
                paddingTop: 9,
                paddingBottom: 34,
                alignItems: "center"
            },
            tabBarIcon: () => <Image
                source={require('../../../assets/img/new.png')}
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
        options={{
            headerShown: false,
            tabBarItemStyle: {
                paddingTop: 17,
                paddingBottom: 42,
                paddingLeft: 12,
                alignItems: "flex-start"
            },
            tabBarIcon: () => <Image
                source={require('../../../assets/img/user.png')}
                style={{
                    height: 24,
                    width: 24,
                }}
            />,
        }}
    />
</MainTab.Navigator>;

export default HomeScreen;