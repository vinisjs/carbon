import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs>
        <Tabs.Screen name="history" options={{
          headerTransparent: true,
          title: "Orders",
          headerShown: false,
          tabBarIcon: () => <Feather name="clock" size={18} />
        }}
        />
        <Tabs.Screen name="index" options={{
          headerTransparent: true,
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <Feather name="home" size={18} />
        }}
        />
        <Tabs.Screen name="profile" options={{
          headerTransparent: true,
          title: "Profile",
          headerShown: false,
          tabBarIcon: () => <Feather name="user" size={18} />
        }}
        />
      </Tabs>
    </>
  );
}
