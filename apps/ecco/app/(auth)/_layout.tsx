import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="login" options={{
          headerTransparent: true,
          title: "Home",
        }}

        />
        <Stack.Screen name="logout" options={{
          headerTransparent: true,
          title: "Home",
        }}

        />
      </Stack>
    </>
  );
}
