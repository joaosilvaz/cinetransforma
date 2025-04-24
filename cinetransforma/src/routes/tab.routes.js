import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useNavigation } from "@react-navigation/native";
import About from "../screens/About";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function TabRoutes({ route }) {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      }}
      initialRouteName={route?.params?.initialRouteName || "tabHome"}
    >
      <Tab.Screen
        name="TabThemes"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "film" : "film-outline"}
              size={24}
              color="red"
              onPress={() => navigation.openDrawer()}
            />
          ),
          tabBarLabel: "Temas",
        }}
      />
      <Tab.Screen
        name="tabHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color="red"
            />
          ),
          tabBarLabel: "Início",
        }}
      />
      <Tab.Screen
        name="tabAbout"
        component={About}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              size={24}
              color="red"
            />
          ),
          tabBarLabel: "Sobre Nós",
        }}
      />
    </Tab.Navigator>
  );
}
