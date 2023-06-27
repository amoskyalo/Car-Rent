import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { data } from "../Charts.jsx/Data";
import {
  ChevronLeftIcon,
  PaperAirplaneIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { io } from "socket.io-client";

const SingleChart = ({ route }) => {
  const { chatId } = route.params;
  const thisChat = data.find((chat) => chat.id === chatId);
  const navigation = useNavigation();
  const [newMessage, setNewMessage] = useState("");
  const [withNewMessage, setWithNewMessage] = useState(thisChat.chats);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://192.168.100.73:8080");
  }, []);

  const handleChangeText = (text) => {
    setNewMessage(text);
  };

  const handleSendMessage = () => {
    setWithNewMessage(prevMessages => [
        ...prevMessages,
        { type: "send", message: newMessage },
      ]);
    socket.current.emit("sendMessage", { message: newMessage, room: 200 });
    setNewMessage("");
  };

  useEffect(() => {
    socket.current.on("receiveMessage", (data) => {
      setWithNewMessage(prevMessages => [
        ...prevMessages,
        { type: "received", message: data.message },
      ]);
    });
  }, []);


  return (
    <KeyboardAvoidingView
      style={{ marginTop: StatusBar.currentHeight, flex: 1 }}
      className="h-screen relative"
    >
      <View className="py-4 px-6 space-y-2">
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          className="h-12 w-12 rounded-xl border border-gray-400 flex flex-row items-center justify-center"
        >
          <ChevronLeftIcon size={24} color="black" />
        </TouchableOpacity>
        <Text className="font-semibold text-2xl text-[#007bff]">
          Chat with {thisChat.groupName}
        </Text>
      </View>

      <ScrollView className="px-6 space-y-4">
        {withNewMessage.map((chat, i) => (
          <View
            className={`p-4 rounded-xl ${
              chat.type === "received"
                ? `bg-[#007bff] max-w-3/4 ml-[25%]`
                : `bg-white w-3/4`
            }`}
            key={i}
          >
            <Text
              className={`${
                chat.type === "received" ? `text-white` : `text-gray-600`
              }`}
            >
              {chat.message}
            </Text>
            <Text className=" text-right text-gray-300">
              {thisChat.lastTextTime}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View className="mb-0 px-6 py-2">
        <View className="flex flex-row items-center bg-white py-2.5 px-3 rounded-full">
          <TextInput
            placeholder="Enter message..."
            className="flex-1"
            onChangeText={handleChangeText}
            value={newMessage}
          />
          <TouchableOpacity
            onPress={handleSendMessage}
            className="h-7 w-7 rounded-lg bg-[#007bff] flex-row items-center justify-center"
          >
            <PaperAirplaneIcon color="white" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SingleChart;
