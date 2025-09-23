// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="restaurants/index"
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
    </Tabs>
  );
}
