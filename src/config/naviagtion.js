import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import Chats from '../WhatsAppTab/chats';
import Status from '../WhatsAppTab/status';
import Calls from '../WhatsAppTab/calls';
import Dashboard from '../Views/Dashboard';
import Pickup from '../Views/Pickup';
import Delivery from '../Views/Delivery';
import Destination from '../Views/Destination';
import RideFare from '../Views/RideFare';


export default function Navigation() {




    const Stack = createNativeStackNavigator();
    const Tab = createMaterialTopTabNavigator();
    // const Drawer = createDrawerNavigator();




  return (

    <NavigationContainer>
    <Stack.Navigator>
{/* Dashboard component */}
      <Stack.Screen name="dashboard" component={Dashboard} options={{
        title:'Dashboard',
        headerStyle :{
          backgroundColor : 'black',
        },
        headerTitleStyle :{
color : 'white'
        },
        headerBlurEffect : 'prominent'
      }
      } />

{/* Dashboard component */}



      <Stack.Screen name="pickup" component={Pickup}  />
      <Stack.Screen name="delivery" component={Delivery} />
      <Stack.Screen name="destination" component={Destination} />
      <Stack.Screen name="rideFare" component={RideFare} />

      {/* WhatsappTabNavigator */}
      {/* <Stack.Screen name="mytab" component={MyTabs} /> */}



    </Stack.Navigator>
  </NavigationContainer>

    
  )


  // function MyTabs() {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen name="chats" component={Chats} />
  //       <Tab.Screen name="calls" component={Calls} />
  //       <Tab.Screen name="status" component={Status} />
  //     </Tab.Navigator>
  //   );
  // }
  
}


