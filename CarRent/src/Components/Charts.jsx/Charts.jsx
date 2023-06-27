import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import SingleChartView from "./SingleChartView";
import { data } from "./Data";
import { io } from "socket.io-client";
import profileImage from "../../../assets/Profile/profile.png";
import notFound from "../../../assets/Icons/notFound.png";

const socket = io("http://192.168.100.73:8080");
const Charts = () => {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    socket.on("newUser", (data) => {
      console.log(data)
      setUsers((prev) => [...prev, data]);
    });
  }, [socket]);

  const chatNavigators = ["Chats", "Users"];
  return (
    <View
      style={{ marginTop: StatusBar.currentHeight }}
      className="px-6 pb-8 pt-4"
    >
      <Text className="font-bold text-3xl text-[#465efc]">Messages</Text>

      <View className="bg-white mt-4 flex-row rounded-full overflow-hidden">
        {chatNavigators.map((n, i) => (
          <Text
            className={`w-1/2 text-center font-semibold text-lg p-2 ${
              active === i ? `bg-[#465efc] text-white` : "text-gray-500"
            }`}
            key={i}
            onPress={() => setActive(i)}
          >
            {n}
          </Text>
        ))}
      </View>

      {active === 0 && (
        <ScrollView className="mt-8" showsVerticalScrollIndicator={false}>
          {data.map((message, i) => (
            <SingleChartView
              image={message.profile}
              groupName={message.groupName}
              lastText={message.lastText}
              lastTextTime={message.lastTextTime}
              unreadTexts={message.unreadTexts}
              chatId={message.id}
              chats={message.chats}
              key={i}
            />
          ))}
        </ScrollView>
      )}

      {active === 1 && users.length > 0 && (
        <ScrollView className="mt-4">
          {users.map((user, i) => (
            <TouchableOpacity
              className="flex flex-row items-center space-x-2 border-b border-dashed py-2"
              key={i}
            >
              <Image
                className="rounded-xl h-14 w-14 overflow-hidden"
                style={{ resizeMode: "cover" }}
                source={profileImage}
              />
              <View className="flex-1">
                <Text className="font-semibold text-lg text-gray-600">
                  {user.name} joined car rent!
                </Text>
                <Text>{user.name} joined car rent! Say hi to them</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {active === 1 && users.length === 0 && (
        <View className=" mt-16 flex-col items-center justify-center">
          <Image
            className="rounded-xl h-72 w-72 overflow-hidden"
            style={{ resizeMode: "cover" }}
            source={notFound}
          />
          <Text className="text-lg">No new users found!</Text>
          <TouchableOpacity className="bg-[#456efc] p-2 px-10 rounded-full mt-3">
            <Text className="text-white">Invite friends</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Charts;
