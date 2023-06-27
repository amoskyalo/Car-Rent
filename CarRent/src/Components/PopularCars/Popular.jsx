import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import PopularCard from "./PopularCard";
import { client, handleGetImageUrl } from "../../_Instance/instance";

const Popular = () => {
  const [populars, setPopulars] = useState([]);

  const getALLCars = async () => {
    try {
      const res = await client.fetch('*[_type == "cars"]');
      setPopulars(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getALLCars();
  }, []);

  return (
    <View className="px-6 mt-10 pb-10">
      <Text className="font-bold text-2xl">Popular Cars</Text>
      {populars.map((popular, i) => (
        <PopularCard
          image={handleGetImageUrl(popular.carImage)}
          name={popular.car}
          seats={popular.seats}
          transmission={popular.transmission}
          fuel={popular.fuel}
          carId={popular._id}
          key={i}
        />
      ))}
    </View>
  );
};

export default Popular;
