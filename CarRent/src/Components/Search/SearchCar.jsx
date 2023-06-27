import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import Empty from "../Empty/Empty";
import { useEffect, useState } from "react";
import { client, handleGetImageUrl } from "../../_Instance/instance";
import { useNavigation } from "@react-navigation/native";

const SearchCar = () => {
  const [query, setQuery] = useState(null);
  const [cars, setCars] = useState([]);
  const navigation = useNavigation();

  const handleSetQuery = (text) => {
    setQuery(text);
  };

  const handleFilterUsingQuery = (str, itemsArr) => {
    if (!str) {
      return itemsArr;
    } else {
      const searchStr = str.toLowerCase();
      const searchResults = itemsArr.filter((item) =>
        item.car.toLowerCase().match(searchStr)
      );
      return searchResults;
    }
  };

  const getALLCars = async () => {
    try {
      const res = await client.fetch('*[_type == "cars"]');
      setCars(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getALLCars();
  }, []);

  return (
    <View className="p-6" style={{ marginTop: StatusBar.currentHeight }}>
      <View className="space-y-3">
        <Text className="font-bold text-2xl sticky top-0">Search</Text>
        <View className="bg-white px-2 rounded-lg flex flex-row items-center space-x-2">
          <MagnifyingGlassIcon color="black" size={25} />
          <TextInput
            placeholder="What do you want to ride today?"
            className="flex-1 p-2"
            onChangeText={handleSetQuery}
          />
        </View>
      </View>
      <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
        <Text className="font-semibold text-[16px]">Browse all</Text>
        <View className="flex flex-row flex-wrap gap-[5%] mt-0 pb-24">
          {handleFilterUsingQuery(query, cars)?.length === 0 ? (
            <Empty />
          ) : (
            handleFilterUsingQuery(query, cars)?.map((car, i) => (
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
                  source={{
                    uri: handleGetImageUrl(car?.carImage),
                  }}
                />
                <View className="space-y-1">
                  <Text className="font-semibold text-gray-800">
                    {car?.car}
                  </Text>
                  <Text className="font-semibold text-xl">${car?.rate}.00</Text>
                  <Text className="text-gray-600">Per hour</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("CarDetails", { carId: car?._id })
                  }
                  className="absolute bottom-3 right-3 bg-[#007bff] p-1 rounded-full"
                >
                  <ChevronRightIcon size={16} color="#ffffff" />
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchCar;
