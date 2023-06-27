import {
  StatusBar,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeBody from "../Components/HomeBody/HomeBody";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const socket = io("http://192.168.100.73:8080");

const HomeScreen = () => {
  const Stack = createNativeStackNavigator(); //Navigator Screen
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state) => state.Slice);

  useEffect(() => {
    socket.emit("addUser", user);
  }, [socket]);

  const account = [
    {
      name: "Log Out",
      icon: ArrowRightOnRectangleIcon,
    },
    {
      name: "Settings",
      icon: Cog6ToothIcon,
    },
    {
      name: "Help",
      icon: QuestionMarkCircleIcon,
    },
  ];

  const HomeHeaderRight = () => {
    return (
      <View className="p-6" style={{ marginTop: StatusBar.currentHeight }}>
        <View className="flex flex-row items-center space-x-3 relative">
          <View className="flex-1 bg-white p-2 rounded-full flex flex-row items-center space-x-2">
            <MagnifyingGlassIcon color="black" size={25} />
            <TextInput placeholder="Search anything..." className="flex-1" />
          </View>
          <TouchableOpacity
            className="flex flex-row items-center space-x-2 bg-white py-2 px-3 rounded-full"
            onPress={() => setOpen(!open)}
          >
            <Bars3Icon color="#007bff" size={24} />
            <Image
              className="h-8 w-8 rounded-full"
              source={{
                uri: "https://avatars.githubusercontent.com/u/91586973?v=4",
              }}
            />
          </TouchableOpacity>
          {open && (
            <View className="absolute border border-gray-300 bg-white rounded-lg p-4 pr-5 top-14 z-50 space-y-3 right-0">
              {account.map((val, i) => (
                <View className="flex flex-row items-center space-x-2" key={i}>
                  <val.icon color="#007bff" size={20} />
                  <Text key={i}>{val.name}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator initialRouteName="HomeScreenBody">
      <Stack.Screen
        name="HomeScreenBody"
        component={HomeBody}
        options={{ header: () => <HomeHeaderRight /> }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
