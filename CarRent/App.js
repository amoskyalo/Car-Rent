import "react-native-url-polyfill/auto";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen";
import Profile from "./src/Screens/Profile";
import Search from "./src/Screens/Search";
import Chat from "./src/Screens/Chat";
import SingleChart from "./src/Components/SingleChart/SingleChart";
import CarDetailed from "./src/Components/CarDetailed/CarDetailed";
import PayCar from "./src/Components/PayCar/PayCar";
import Onboarding from "./src/Screens/Onboarding";
import Login from "./src/Components/Authentication/Login";
import { data } from "./src/Components/Charts.jsx/Data";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ChatBubbleOvalLeftIcon,
} from "react-native-heroicons/solid";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { store } from "./Store/Store";
import { Provider } from "react-redux";

export default function App() {
  const Tab = createBottomTabNavigator(); //Navigator and Screen
  const Stack = createNativeStackNavigator(); //Navigator and Screen
  const totalChats = data.reduce((curr, chat) => curr + chat.unreadTexts, 0);

  // const userName = "amos." + Math.floor(Math.random() * 100);
  // const socket = io("http://192.168.100.73:8080");

  // useEffect(() => {
  //   socket.emit("addUser", { userName });
  // }, [socket]);

  function HomeTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            paddingBottom: 30,
            paddingTop: 30,
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
          },
          tabBarActiveTintColor: "#007bff",
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <HomeIcon size={30} color={color} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => (
              <MagnifyingGlassIcon size={30} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ color }) => (
              <ChatBubbleOvalLeftIcon size={30} color={color} />
            ),
            tabBarBadge: totalChats,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => <UserIcon size={30} color={color} />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="onBoarding">
          <Stack.Screen
            name="onBoarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: true,
              headerTitleAlign: "center",
              headerTitle: "Login",
              headerTitleStyle: { fontWeight: "800" },
            }}
          />
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SingleChart"
            component={SingleChart}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CarDetails"
            component={CarDetailed}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Pay"
            component={PayCar}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}
