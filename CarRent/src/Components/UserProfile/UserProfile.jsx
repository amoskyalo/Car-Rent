import { View, Text, ScrollView, StatusBar, Image, TouchableOpacity } from "react-native";
import {
  PencilSquareIcon,
  ChevronRightIcon,
  PencilIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "react-native-heroicons/solid";
import { PieChart, AmountSpendGraph } from "../PieChart/PieChart";

const UserProfile = () => {
  const data = [
    {
      name: "Phone number",
      text: "+254 794433701",
    },
    {
      name: "Your Address",
      text: "P.O BOX 01200",
    },
    {
      name: "Region",
      text: "Kenya",
    },
    {
      name: "Currency",
      text: "Kenyan Shilling",
    },
  ];

  const chats = [
    {
      chartText: "Cars hired",
      chartComponent: PieChart,
    },
    {
      chartText: "Amount spent",
      chartComponent: AmountSpendGraph,
    },
  ];

  const options = [
    {
      name: "Request a feature",
      icon: PencilIcon,
    },
    {
      name: "Hire me",
      icon: BriefcaseIcon,
    },
    {
      name: "Contact me",
      icon: PhoneIcon,
    },
  ];

  return (
    <ScrollView
      className="space-y-8"
      style={{ marginTop: StatusBar.currentHeight + 20, paddingHorizontal: 18 }}
    >
      <View className="justify-end flex flex-row">
        <PencilSquareIcon size={30} color="#007bff" />
      </View>

      <View className="">
        <Image
          className="h-24 w-24 mx-auto rounded-full"
          source={{
            uri: "https://avatars.githubusercontent.com/u/91586973?v=4",
          }}
        />
        <Text className="font-bold text-gray-700 text-2xl text-center">
          Amos Kyalo
        </Text>
        <Text className="text-center text-gray-600 text-sm">
          amoskyalo927@gmail.com
        </Text>
      </View>

      <View className="space-y-3 bg-white p-4 rounded-xl border border-gray-300">
        <Text className="text-gray-800 font-bold text-xl">
          Personal Information
        </Text>
        <View className="space-y-3">
          {data.map((info, i) => (
            <TouchableOpacity
              key={i}
              className="flex flex-row items-center justify-between"
            >
              <Text className="font-semibold text-gray-700text-[16px]">{info.name}</Text>
              <View className="flex flex-row items-center space-x-2">
                <Text className="text-gray-500 text-[16px]">{info.text}</Text>
                <ChevronRightIcon size={14} color="gray" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="rounded-xl border border-gray-300 p-4 bg-white">
        <Text className="text-gray-800 font-bold text-xl">Your Stats</Text>
        <View className="flex flex-row justify-around mt-8">
          {chats.map((chat, i) => (
            <View key={i}>
              <chat.chartComponent />
              <Text className="text-center font-bold text-[16px] text-gray-500">
                {chat.chartText}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View className="bg-white p-4 rounded-xl space-y-3 mb-8 border border-gray-300">
        {options.map((option, i) => (
          <TouchableOpacity className="flex flex-row items-center space-x-3" key={i}>
            <View className="bg-[#007bff] p-2 rounded-lg flex flex-row items-center justify-center">
              <option.icon size={20} color="white" />
            </View>
            <View className="flex-1 flex-row items-center justify-between border-b border-gray-200">
              <Text className="text-[16px] text-gray-600 py-3">
                {option.name}
              </Text>
              <ChevronRightIcon size={14} color="gray" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default UserProfile;
