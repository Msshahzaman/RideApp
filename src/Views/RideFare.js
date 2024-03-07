import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function RideFare({ route }) {
  const { pickup, destination } = route.params;
  const fares = {
    bike: 50,
    rickshaw: 80,
    car: 100,
    bus: 150,
    truck: 200,
    airplane: 1000,
  };
  const calculateFare = (vehicle) => {
    const { latitude: pickupLat, longitude: pickupLong } = pickup.geocodes.main;
    const { latitude: destinationLat, longitude: destinationLong } = destination.geocodes.main;
    console.log(pickup, destination);
    const distance = calcCrow(
      pickupLat,
      pickupLong,
      destinationLat,
      destinationLong
    );

    const fare = fares[vehicle] * distance;
    // console.log(fares[vehicle] * distance)
    alert("Rs" + fare.toFixed(2));
  };
  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }
  return (
    <View>
      <Text style={styles.text}> Select Your Ride</Text>

      <View>
        <Text style={styles.para}>Your Pickup Location is : </Text>
        <Text
        style={styles.TextSelctedLocation}
        >
          {pickup.name},{pickup.location.address}
        </Text>
      </View>

      <View>
        <Text style={styles.para}>Your destination Location is : </Text>
        <Text
        style={styles.TextSelctedLocation}

        >
          
          {destination.name},{destination.location.address}
        </Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => calculateFare("bike")}>
          <Image
            source={{
              uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              resizeMode: "fit",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculateFare("rickshaw")}>
          <Image
            source={{
              uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1648432113/assets/6e/86fff4-a82a-49b9-8b0b-54b341ea0790/original/Uber_Auto_312x208_pixels_Mobile.png",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              resizeMode: "fit",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculateFare("car")}>
          <Image
            source={{
              uri: "https://www.shutterstock.com/image-vector/car-sharing-logo-vector-city-260nw-1549750646.jpg",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              resizeMode: "fit",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => calculateFare("bus")}>
          <Image
            source={{
              uri: "data:image/jpeg;base64,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jS8fVfVu92dItmv4+biaetzyPcG+aiptfbSei2Bo7HuPvPktPZZXnJpWTFoiZ2TDwVy5Nwq0h5v3K3jKz/m9PY2eHXyYD0i1x33aAdQAVi068TOyNOzBRcOq9pdlG7gs6DUO2vyiPfgtEcPRj8sEvBexU61R6ye9kDara+Qkue41JNC4kY9q8QSALeLJyVWx3SoOwFTdi5G5T0iVckkrIrNOfrbP8nNmq0NcKOcG0keKUo51ccKjLIneaxdj0lKwFsdRU1NK4mlK+5dksPI60dJbBYuS6BuYQHDrNpK2uyLuPwWwaNntppUu967bZdRrOz1QpOz6uQNyaEBzLQsNqJFaroGiLFJQXlORWFjcmhZAaAgLcMdFeREAREQBERAFQhVRAY0tlBWFPoVjtilkQGqWrVGJ2bGnuCirTqNGcmjgugKlEByO38njTkFrGkuTl46IX0CYwvDrM07EB8vWvUWZvqFRc2qcw9Q8F9Xv0dGfVCx36DhObRwQHyVNoCUeoeCxvyXLWgYe4L63fqxZzmwcF7h1ds7co2juCA+UbLqzbH9GB9OsUHvUxZuTy3PzZTiV9RR6OiGTBwV9tnaMmhAfNtl5I7S7pEqasnIy71iu9hg3L0gOO2TkcjHSKmrJyU2ZuYXSEQGn2bk+sjfUCk4NVbM3KMcFOogI+LQ8LcmDgsllkYMmhX0QFsRgbAvdFVEAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/2Q==",
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              resizeMode: "fit",
            }}
          />
        </TouchableOpacity>
      </View>
      {/* <View>
                <Button onPress={() => calculateFare('bike')}  />
                <Button onPress={() => calculateFare('rickshaw')} title={`rickshaw |  ${fares.rickshaw} Rs./ km`} />
                <Button onPress={() => calculateFare('car')} title={`car |  ${fares.car} Rs./ km`} />
                <Button onPress={() => calculateFare('bus')} title={`bus |  ${fares.bus} Rs./ km`} />
            </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Change this value to see different layouts
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    paddingBottom:30,
    margin:10,
  },
  para: {
    fontSize: 25,
    position :'relative',
    left : 10
    
   
  },
  TextSelctedLocation :{
    fontSize : '15',
    position :'relative',
    left : 10,
    fontStyle :'italic'
    
  }
  
});

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 20,
//         fontWeight: "700",
//       },
// })

export default RideFare;
