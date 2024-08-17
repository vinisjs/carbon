import { Tabs } from "expo-router";

export default function RootLayoutAdmin() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        headerTransparent: true,
        title: "Home",
      }}

      />
    </Tabs>
  );
}
