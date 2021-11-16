import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/home';
import SettingsScreen from '../screen/Setting';
import Counter from '../screen/counter';
import TodoList from '../screen/todo';



const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();




function Food({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <TouchableOpacity onPress={() => {
                navigation.navigate('Home', { fastFood: 'Kabab', fruit: 'Grpaes' })
            }}
                style={{ padding: 25, backgroundColor: 'orange' }} >

                <Text>Food </Text>
            </TouchableOpacity>
        </View>
    );

}

function About({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Text style={{ padding: 25, backgroundColor: 'tomato' }} >About</Text>
        </View>
    );
}



export default function RouteNavigation() {
    return (
        // <NavigationContainer>
        //     <Drawer.Navigator initialRouteName="Home" >
        //         <Drawer.Screen name="Home" component={HomeScreen}
        //          options={{
        //           title: 'My home',
        //           headerStyle: {
        //             backgroundColor: '#f4511e',
        //           },
        //           headerTintColor: '#fff',
        //           headerTitleStyle: {
        //             fontWeight: 'bold',
        //           },
        //         }}
        //         />
        //         <Drawer.Screen name="Food" component={Food} />
        //         <Drawer.Screen name="About" component={About} />
        //     </Drawer.Navigator>
        // </NavigationContainer>






        <NavigationContainer >
            <Tab.Navigator  initialRouteName='Todo'
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ?
                            'home' : 'home-outline';
                    }
                    else if (route.name === 'Food') {
                        iconName = focused ? 'fast-food' : 'fast-food-outline';
                    }
                    else if (route.name === 'About') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    else if (route.name === 'Setting') {
                        iconName = focused ? 'add' : 'settings-outline';
                    }
                    else if (route.name === 'Counter') {
                        iconName = focused ? 'time' : 'time-outline';
                    }
                    else if (route.name === 'Todo') {
                        iconName = focused ? 'list-circle' : 'list-circle-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'black',
            })
            } >
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        title: 'My home',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }
                    }
                />

                <Tab.Screen name="Food" component={Food} />
                <Tab.Screen name="About" component={About} />
                <Tab.Screen name="Setting" component={SettingsScreen} />
                <Tab.Screen name="Counter" component={Counter} />
                <Tab.Screen name="Todo" component={TodoList} />
            </Tab.Navigator>
        </ NavigationContainer>

    );
}