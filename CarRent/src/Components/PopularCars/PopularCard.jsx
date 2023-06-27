import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PopularCard = ({ name, image, transmission, seats, fuel, carId }) => {
  const navigation = useNavigation();
  return (
    <View className="bg-white rounded-3xl flex flex-col justify-between h-48 relative mt-5 p-6">
      <Text className="font-semibold text-lg">{name}</Text>
      <Image
        className="absolute -right-1 -top-5 h-24 w-40"
        style={{ resizeMode: "contain" }}
        source={{
          uri: image
        }}
      />
      <View className="mt-4 space-y-5">
        <View className="flex flex-row items-center justify-center space-x-3">
          <Text>{transmission}</Text>
          <Text>|</Text>
          <Text>{seats} seats</Text>
          <Text>|</Text>
          <Text>{fuel}</Text>
        </View>
        <View className="flex flex-row items-center justify-center space-x-5">
          <Text className="bg-[#007bff] text-white rounded-lg py-2.5 px-10">
            Rent Now
          </Text>
          <Text
            onPress={() => navigation.navigate("CarDetails", { carId })}
            className="bg-white border border-[#007bff] text-[#007bff] rounded-lg py-2 px-12"
          >
            Details
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PopularCard;
