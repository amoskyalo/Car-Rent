import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const Boarding = () => {
  const { height, width } = Dimensions.get("screen");
  const [selected, setSelected] = useState(0);
  const navigation = useNavigation();
  const sharedValues = useSharedValue(0);

  // animated styles
  const firstScreenAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(sharedValues.value !== 0 ? 0 : 1, {
        duration: 1000,
      }),
    };
  });

  const secondScreenAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(sharedValues.value !== 1 ? 0 : 1, {
        duration: 1000,
      }),
    };
  });

  const thirdScreenAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(sharedValues.value !== 2 ? 0 : 1, {
        duration: 1000,
      }),
    };
  });

  // Functions
  const onNextFun = () => {
    if (selected < 2) {
      setSelected(selected + 1);
      sharedValues.value = selected + 1;
    } else if(selected === 2){
        navigation.navigate("login")
    }
  };

  const onSkipFun = () => {
    navigation.navigate("login");
  };

  //screens
  const FirstScreen = () => {
    return (
      <Animated.View
        style={[
          { height: height, width: width, zIndex: -99 },
          StyleSheet.absoluteFill,
          firstScreenAnimatedStyle,
        ]}
      >
        <View
          className="absolute z-50 left-0 w-full px-6 space-y-5"
          style={{ top: height / 2 }}
        >
          <Text className="text-white font-bold text-4xl">
            Welcome to Premium CarRent!
          </Text>
          <Text className="text-white font-[500] text-xl">
            Discover the ultimate car experience at your fingertips.
          </Text>
        </View>
        <Image
          style={{ height: height, width: width }}
          source={{
            uri: "https://media.wallpaperchill.com/car-wallpapers/black-car-amoled-wallpaper.jpg",
          }}
          preserveAspectRatio="xMidyMid slice"
        />
      </Animated.View>
    );
  };

  const SecondScreen = () => {
    return (
      <Animated.View
        style={[
          { height: height, width: width, zIndex: -99 },
          StyleSheet.absoluteFill,
          secondScreenAnimatedStyle,
        ]}
      >
        <View
          className="absolute z-50 left-0 w-full px-6 space-y-5"
          style={{ top: height / 2 }}
        >
          <Text className="text-white font-bold text-4xl">
            Get Ready to Drive!
          </Text>
          <Text className="text-white font-[500] text-xl">
            Explore a world of automotive possibilities with our intuitive
            features.
          </Text>
        </View>
        <Image
          style={{ height: height, width: width }}
          source={{
            uri: "https://i.pinimg.com/originals/fc/2e/46/fc2e4625e0214794f0b6f7f25b5df0b9.jpg",
          }}
          preserveAspectRatio="xMidyMid slice"
        />
      </Animated.View>
    );
  };

  const ThirdScreen = () => {
    return (
      <Animated.View
        style={[
          { height: height, width: width, zIndex: -99 },
          StyleSheet.absoluteFill,
          thirdScreenAnimatedStyle,
        ]}
      >
        <View
          className="absolute z-50 left-0 w-full px-6 space-y-5"
          style={{ top: height / 2 }}
        >
          <Text className="text-white font-bold text-4xl">
            Rev up your Journey!
          </Text>
          <Text className="text-white font-[500] text-xl">
            Embark on an exciting ride with CarDrive and unlock new adventures.
          </Text>
        </View>
        <Image
          style={{ height: height, width: width }}
          source={{
            uri: "https://i.pinimg.com/originals/24/99/c4/2499c46c480afd1f76a4cc10673b667e.jpg",
          }}
          preserveAspectRatio="xMidyMid slice"
        />
      </Animated.View>
    );
  };

  return (
    <View
      style={{ height: height, width: width, flex: 1, position: "relative" }}
    >
      <View className="h-full w-full flex-row">
        <FirstScreen />
        <SecondScreen />
        <ThirdScreen />
      </View>

      <View className="flex-row items-center justify-between absolute bottom-5 w-full px-6">
        <Text className="text-white font-semibold" onPress={onSkipFun}>
          Skip
        </Text>
        <View className="flex-row space-x-5">
          {[1, 2, 3].map((item, i) => (
            <Text
              className={`h-3 w-3 rounded-full ${
                selected === i ? `bg-red-600` : `bg-white`
              }`}
              key={i}
            />
          ))}
        </View>
        <Text className="text-white font-semibold" onPress={onNextFun}>
          {selected < 2 ? "Next" : "Done"}
        </Text>
      </View>
    </View>
  );
};

export default Boarding;
