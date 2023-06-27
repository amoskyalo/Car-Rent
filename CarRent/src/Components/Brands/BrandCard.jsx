import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";

const BrandCard = ({ brandLogo, brandName, brandCount }) => {
  return (
    <TouchableOpacity className="bg-white p-4 w-32 rounded-2xl mx-2">
      <Image
        className="h-10 w-10 mx-auto object-fit"
        source={{
          uri: brandLogo
        }}
      />
      <Text className="text-center font-semibold text-lg">{brandName}</Text>
      <Text className="text-center text-[#007bff] font-black">
        +{brandCount}
      </Text>
    </TouchableOpacity>
  );
};

export default BrandCard;
