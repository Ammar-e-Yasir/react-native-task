import React from 'react'
import { View, Text } from 'react-native'

export default function HomeScreen ({ route }) {
  // const {fastFood , fruit} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ backgroundColor: 'brown', color: 'white', padding: 5 }}>Fast Food : {route?.params?.fastFood || 'chicken roll'}</Text>
      <Text style={{ backgroundColor: 'orange', color: 'white', padding: 5 }}>Fruit : {route?.params?.fruit || 'apple'}</Text>
    </View>
  )
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
