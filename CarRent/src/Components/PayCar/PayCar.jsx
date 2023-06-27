import { View, Text, StatusBar } from "react-native";
import MapView from "react-native-maps";
import React from "react";

const PayCar = () => {
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View>
        <Text>Hey</Text>
      </View>
    </View>
  );
};

export default PayCar;
