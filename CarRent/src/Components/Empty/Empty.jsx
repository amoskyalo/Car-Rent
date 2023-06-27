import { View, Text, Image } from "react-native";
import notFoundImage from "../../../assets/Icons/notFound.png";

const Empty = () => {
  return (
    <View className="w-full px-4 mt-6 h-[60vh] flex flex-row items-center justify-center">
      <View>
        <Image
          source={notFoundImage}
          className="h-72 w-72 mx-auto"
          style={{ resizeMode: "contain" }}
        />
        {/* <Text className="text-center font-semibold text-lg">
          We cant find what you are looking for!
        </Text> */}
      </View>
    </View>
  );
};

export default Empty;
