import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  ChevronLeftIcon,
  ArrowUpTrayIcon,
  HeartIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import { client, handleGetImageUrl } from "../../_Instance/instance";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import engine from "../../../assets/Specs/engine.png";
import speed from "../../../assets/Specs/speed.png";
import color from "../../../assets/Specs/color.png";
import fuel from "../../../assets/Specs/fuel.png";
import seat from "../../../assets/Specs/seat.png";
import location from "../../../assets/Icons/location.png";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const CarDetailed = ({ route }) => {
  const { carId } = route.params;
  const [active, setActive] = useState(1);
  const [allCars, setAllCars] = useState([]);

  const getALLCars = async () => {
    try {
      const res = await client.fetch('*[_type == "cars"]');
      setAllCars(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getALLCars();
  }, []);

  const initialPosition = 0;
  const y = useSharedValue(initialPosition);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      y.value = initialPosition;
    },

    onActive: (event, ctx) => {
      y.value = initialPosition + event.translationX;
    },

    onEnd: (event, ctx) => {
      y.value = initialPosition;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${y.value}deg` }],
    };
  });

  const thisCar = allCars?.find((car) => car._id === carId);

  const navigation = useNavigation();

  const specs = [
    {
      name: "Engine",
      value: thisCar?.engineSize,
      image: engine,
    },
    {
      name: "Max Speed",
      value: "280 km/h",
      image: speed,
    },
    {
      name: "Acceleration",
      value: "4.9 sec",
      image: speed,
    },
    {
      name: "Color",
      value: thisCar?.color,
      image: color,
    },
    {
      name: "Fuel",
      value: thisCar?.fuel,
      image: fuel,
    },
    {
      name: "GearBox",
      value: thisCar?.gearBox,
      image: engine,
    },
    {
      name: "Seat",
      value: thisCar?.seats,
      image: seat,
    },
  ];

  const { height } = Dimensions.get("screen");

  return (
    <View className="relative" style={{ height: height }}>
      <View
        className="flex flex-row justify-between items-center px-6 py-4 bg-white"
        style={{ paddingTop: StatusBar.currentHeight }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreenBody")}
          className="h-12 w-12 rounded-xl border border-gray-400 flex flex-row items-center justify-center mt-8"
        >
          <ChevronLeftIcon size={24} color="black" />
        </TouchableOpacity>
        <View className="flex-row items-center justify-center space-x-5 mt-8">
          {[HeartIcon, ArrowUpTrayIcon].map((Icon, i) => (
            <View
              key={i}
              className={`${
                i === 0 ? `bg-[#007bff]` : ""
              } h-12 w-12 rounded-xl border border-gray-400 flex-row items-center justify-center`}
            >
              <Icon size={24} color={i === 0 ? "white" : "black"} />
            </View>
          ))}
        </View>
      </View>

      <ScrollView className="space-y-3">
        <View className="bg-white p-6 rounded-b-[40px]">
          <Text className="font-bold text-3xl">{thisCar?.car}</Text>
          <View>
            {thisCar ? (
              <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.Image
                  className="h-48 w-full"
                  style={[{ resizeMode: "contain" }, animatedStyle]}
                  source={{
                    uri: handleGetImageUrl(thisCar?.carImage),
                  }}
                />
              </PanGestureHandler>
            ) : (
              ""
            )}
            <View className="flex flex-row items-center gap-2 mt-1 justify-center">
              {Array(3)
                .fill(0)
                .map((item, i) => {
                  return (
                    <Text
                      key={i}
                      className={`h-3 rounded-full ${
                        i === 0 ? `bg-[#007bff] px-6` : `bg-gray-400 px-2`
                      }`}
                    ></Text>
                  );
                })}
            </View>
          </View>
        </View>

        <View className="mt-4 p-6">
          <Text className="text-2xl font-bold text-gray-500">
            Specifications
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-6"
          >
            {specs.map((spec, i) => (
              <View
                key={i}
                className={`p-4 w-32 bg-[#007bff] rounded-xl space-y-1 ${
                  i === 0 ? `ml-0 mr-2` : `mx-2`
                }`}
              >
                <Image className="h-6 w-6" source={spec.image} />
                <Text className="font-[500] text-white">{spec.name}</Text>
                <Text className="text-[14px] text-white">{spec.value}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="px-6 pb-8">
          <Text className="text-2xl font-bold text-gray-500">Days</Text>
          <View className="flex flex-row justify-between mt-6">
            {[1, 2, 3].map((val, i) => (
              <TouchableOpacity
                className={`p-4 rounded-xl space-y-2 ${
                  active === i ? `bg-white scale-105` : `border border-gray-300`
                }`}
                key={i}
                onPress={() => setActive(i)}
              >
                <Text>{val} day (s)</Text>
                <Text className="text-gray-500 text-[14px]">
                  Pay ${val * thisCar?.rate}
                  .00
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="px-6 pb-8 space-y-6">
          <Text className="text-2xl font-bold text-gray-500">Location</Text>
          <View className="flex flex-row items-center space-x-5 border border-gray-300 p-4 rounded-xl">
            <Image
              className="h-8 w-8"
              source={location}
              style={{ resizeMode: "contain" }}
            />
            <Text className="text-gray-600 flex-1">
              Bollore Africa Logistics Limited, P.O.BOX 46123, Nairobi 00100
            </Text>
          </View>
        </View>

        <View className="px-6 pb-28 space-y-2">
          <Text className="text-lg font-semibold text-gray-500">Ratings</Text>
          <View className="flex flex-row items-center space-x-2">
            {Array(5)
              .fill(0)
              .map((item, i) => (
                <StarIcon size={15} color="orange" key={i} />
              ))}
            <Text className="text-[12px] text-gray-600">
              (5) verified ratings
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-2 bg-white px-6 py-4 w-full">
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="font-bold text-[16px] text-gray-700">
              {active + 1} Day (s)
            </Text>
            <Text className="text-gray-500">
              <Text className="font-bold text-2xl text-gray-700">
                &{thisCar?.rate}.00
              </Text>{" "}
              Per day
            </Text>
          </View>
          <TouchableOpacity
            className="bg-[#007bff] py-3 px-5 rounded-lg"
            onPress={() => navigation.navigate("Pay")}
          >
            <Text className="text-white font-bold">Select This Car</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CarDetailed;
