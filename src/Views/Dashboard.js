import React from 'react'
import { View,Text, Button, ImageBackground,StyleSheet } from 'react-native'

export default function Dashboard({navigation}) {
  return (
 <View>
 



















    <Button 
        title='Go to Pickup'
    onPress={()=>navigation.navigate('pickup')}/>

         <Button 
        title='Go to Delivery'
    onPress={()=>navigation.navigate('delivery')}/>



 </View>
  )
}

// const style = StyleSheet.create({
  

//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   }

// })
