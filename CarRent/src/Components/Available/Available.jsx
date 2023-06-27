import { View, Text, Image } from "react-native";
import React from "react";
import { populars } from "../../_DB/Db";
import { HeartIcon, ChevronRightIcon } from "react-native-heroicons/outline";

const Available = () => {
  return (
    <View className="px-6 pb-6">
      <Text className="font-bold text-2xl">Available Cars</Text>
      <View className="flex flex-row flex-wrap gap-[5%] mt-2">
        {populars.map((car, i) => (
          <View
            className="bg-white p-4 rounded-lg w-[45%] space-y-2 relative"
            key={i}
          >
            <View className="flex flex-row justify-between">
              <HeartIcon size={20} color="#7b808c" />
              <Text className="bg-[#7b808c] text-white py-0.5 px-2 text-[12px] rounded-full">
                Daily
              </Text>
            </View>
            <Image
              className="h-20 w-full"
              style={{ resizeMode: "contain" }}
              source={car.image}
            />
            <View className="space-y-1">
              <Text className="font-semibold text-gray-800">{car.name}</Text>
              <Text className="font-semibold text-xl">
                {car.hourlyRentPrice.split("/")[0]}.00
              </Text>
              <Text className="text-gray-600">
                Per {car.hourlyRentPrice.split("/")[1]}
              </Text>
            </View>
            <View className="absolute bottom-3 right-3 bg-[#007bff] p-1 rounded-full">
              <ChevronRightIcon size={16} color="#ffffff" />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Available;
