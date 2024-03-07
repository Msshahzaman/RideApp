

import React from 'react'
import { View,Text,Button,StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import { useState,useEffect } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import {Marker} from 'react-native-maps';


export default function Destination({navigation}) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [places, setPlaces]= useState([]);
  const [pickup, setPickup] = useState();


  useEffect(() => {


    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }




      // let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
Location.watchPositionAsync({

  accuracy:6,
  distanceInterval :1,
  timeInterval :1000

}, (location)=>{
  setLocation(location)
})




    })();
  }, []);

  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  if(errorMsg){
    return <Text>{errorMsg}</Text>
   }
  
   if(!location){
    return <Text>Loading...</Text>
   }
  


   const searchPlaces = (Text) => {
    setPickup(null);
console.log(Text)

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'fsq3UeYwcLuSGQo9WukyX6KBhnAV49lpCLcGqUInPkYw2ew='
  }
};

const {latitude, longitude} = location.coords;













   fetch(`https://api.foursquare.com/v3/places/search?query=${Text}&ll=${latitude},${longitude}&radius=3000`, options)
  .then(response => response.json())
  .then(response => {console.log(response) 
  setPlaces(response.results)
  })
  .catch(err => console.error(err));

  }   


  const getPickupLocation = (item) => {
    setPickup(item);
      }
    



// RETURN MAIN DIV UI
  return (
    <View>

        
     
      <Text
       style={styles.text}
        
        >Pickup here</Text>
        
        {/* &nbsp; */}
        <View>

<TextInput 
style={styles.input}
placeholder='search any location'
onChangeText={searchPlaces}
/>


{!pickup &&
            <View 
            >
            {places.map((item , index) => {
              return <TouchableOpacity key={index} onPress={() => getPickupLocation(item)}>
                <Text 
                style={styles.searchPlaces}
                >{item.name} {item.location.address}</Text>
              </TouchableOpacity>
            })}   
            </View>
            }


{pickup &&
            <View>
              <Text style={styles.pickupLocation}>Your Pickup Location Is {pickup.name} {pickup.location.address}</Text>
            </View>
            }

</View>






<View>
<MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0040,
                        longitudeDelta: 0.0040,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="You are here"
                    />

                </MapView>
                <Button disabled={!pickup} style={styles.button} title='Select Destination' onPress={() => navigation.navigate('destination', {pickup}) }/>



</View>
                




    </View>
  )
}






const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  map: {
    width: '100%',
    height: '60%',
  },
  button: {
    backgroundColor: '#fff',
    color: '#fff',
    fontSize: 20,
    borderColor: 'black',

   }
,
   input: {
    borderColor: 'black',
    borderWidth: 1, // Remove quotes from 1px
    borderRadius : 7,
    borderBottomColor : 'black',
    borderStyle: 'solid',
    width: "80%",
    height: 40,
    paddingHorizontal: 10,
    margin: "auto",
  },
  text :{
    fontSize : 60,
    // position :'relative',
    // left: 100,
    backgroundColor: '#fff'
   }, 
   searchPlaces:{
    fontSize :20
   }
});






















































































// export default function Pickup({navigation}) {
//   return (
//     <View>
//         <Text>Pickup here</Text>
        
// <Button 
//         title='Go to Destination'
//     onPress={()=>navigation.navigate('destination')}/>




//     </View>
//   )
// }
