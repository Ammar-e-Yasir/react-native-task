import React from 'react'
import RouteNavigation from './config/navigation'

export default function App() {
    return (
        <RouteNavigation />
    )
}

//  import * as React from 'react';
//  import { View,Text } from 'react-native';
//  import { createDrawerNavigator } from '@react-navigation/drawer';
//  import { NavigationContainer } from '@react-navigation/native';
//  import HomeScreen from '../screen/home';

// const Drawer = createDrawerNavigator();
//  function Food({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Food</Text>
//     </View>
//   );
// }
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Food</Text>
//     </View>
//   );
// }

// function About({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>About</Text>
//     </View>
//   );
// }

// export default function RouteNavigation() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Food" component={Food} />
//         <Drawer.Screen name="About" component={About} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }