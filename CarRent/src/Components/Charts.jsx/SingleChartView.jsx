import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SingleChartView = ({
  image,
  groupName,
  lastText,
  lastTextTime,
  unreadTexts,
  chatId,
  chats,
}) => {
  const trimText = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SingleChart", { chatId })}
      className="flex flex-row items-center gap-3 border-b border-dashed border-gray-400 py-2"
    >
      <Image
        className="rounded-xl h-14 w-14 overflow-hidden"
        style={{ resizeMode: "contain" }}
        source={image}
      />
      <View className="flex-1">
        <Text className="font-bold text-lg text-gray-700 capitalize">
          {groupName}
        </Text>
        <Text className="text-[14px] text-gray-500">
          {trimText(chats[chats.length - 1].message, 60)}
        </Text>
      </View>
      <View className="space-y-2">
        <Text className="text-gray-500">{lastTextTime}</Text>
        {unreadTexts > 0 && (
          <Text className="bg-red-600 w-6 h-6 text-center text-white font-bold mx-auto rounded-lg pt-0.5">
            {unreadTexts}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SingleChartView;
