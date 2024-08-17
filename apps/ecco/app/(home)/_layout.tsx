import { Tabs } from "expo-router";

export default function RootLayout() {
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
