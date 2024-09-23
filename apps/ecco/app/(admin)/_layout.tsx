import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayoutAdmin() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        headerTransparent: true,
        title: "Home",
        tabBarIcon: () => <Feather name="home" size={18} />
      }}

      />
      <Tabs.Screen name="products" options={{
        headerTransparent: true,
        title: "Products",
        tabBarIcon: () => <Feather name="shopping-cart" size={18} />
      }}

      />
    </Tabs>
  );
}
