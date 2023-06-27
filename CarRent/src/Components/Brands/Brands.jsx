import { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import BrandCard from "./BrandCard";
import { client, handleGetImageUrl } from "../../_Instance/instance";

const Brands = () => {
  const[allBrands, setAllBrands] = useState([]);

  const handleGetAllBrands = async() => {
    try {
      const response = await client.fetch('*[_type == "brands"]');
      setAllBrands(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetAllBrands();
  }, []);


  return (
    <View>
      <View className="flex flex-row items-center justify-between px-6">
        <Text className="text-2xl font-bold">Brands</Text>
        <View className="flex flex-row items-center space-x-1">
          <Text className="font-[500]">See All</Text>
          <ChevronRightIcon color="black" size={15} />
        </View>
      </View>

      <ScrollView
        className="!space-x-10"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        {allBrands.map((brand, i) => (
          <BrandCard
            brandCount={brand.brandCount}
            brandName={brand.brandName}
            brandLogo={handleGetImageUrl(brand?.brandImage)}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Brands;
