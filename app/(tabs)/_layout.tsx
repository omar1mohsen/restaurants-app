// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TransitionPresets } from "@react-navigation/bottom-tabs";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        animation:"shift",

      }}
    >
      <Tabs.Screen
        name="restaurants"
        options={{
          title: "Restaurants",
          tabBarLabel: "Restaurants",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="home"
              size={size}
              color={!focused ? "gray" : "tomato"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map/index"
        options={{
          title: "Map",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="map-outline"
              size={size}
              color={!focused ? "gray" : "tomato"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="settings"
              size={size}
              color={!focused ? "gray" : "tomato"}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="restaurants/[id]"
        options={{
          href:null,
        }}
      /> */}
    </Tabs>
  );
}
