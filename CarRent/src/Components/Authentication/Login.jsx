import { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { addUser } from "../../../Store/Slices";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleRegister = () => {
    if(email && password && name) {
      dispatch(addUser({ email, name, password }));
      navigation.navigate("HomeTabs")
    }
  }
  return (
    <View style={{ flex: 1, position: "relative", marginTop: 24 }}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/91586973?v=4",
        }}
        className="h-24 w-24 rounded-full mx-auto"
      />

      <View className="p-6 w-full">
        <View className="rounded-xl space-y-8">
          <View className="space-y-4">
            {[
              { name: "Name", state: setName, keyboardType: "default" },
              { name: "Email", state: setEmail, keyboardType: "email-address" },
              { name: "Password", state: setPassword, keyboardType: "numeric" },
            ].map((item, i) => (
              <TextInput
                placeholder={item.name}
                key={i}
                keyboardType={item.keyboardType}
                className="p-3 rounded-xl text-gray-700 bg-white"
                onChangeText={(text) => item.state(text)}
              />
            ))}
          </View>
          <Text
            onPress={handleRegister}
            className="bg-[#007bff] p-3 rounded-xl text-center font-semibold text-white"
          >
            Log in
          </Text>
          <Text className="text-center">Dont have an account? Sign up</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
