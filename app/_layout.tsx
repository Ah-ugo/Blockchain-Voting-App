import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import { createTamagui, TamaguiProvider, View } from "tamagui";
import defaultConfig from "@tamagui/config/v3";

const config = createTamagui(defaultConfig);

export const unstable_settings = {
  initialRouteName: "Home",
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    InterBlack: require("../assets/fonts/static/Inter_24pt-Black.ttf"),
    InterBold: require("../assets/fonts/static/Inter_24pt-Bold.ttf"),
    InterXlight: require("../assets/fonts/static/Inter_24pt-ExtraLight.ttf"),
    InterLight: require("../assets/fonts/static/Inter_24pt-Light.ttf"),
    InterMedium: require("../assets/fonts/static/Inter_24pt-Medium.ttf"),
    InterRegular: require("../assets/fonts/static/Inter_24pt-Regular.ttf"),
    InterSemiBold: require("../assets/fonts/static/Inter_24pt-SemiBold.ttf"),
    InterThin: require("../assets/fonts/static/Inter_24pt-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <PaperProvider>
      <TamaguiProvider config={config}>
        <Stack initialRouteName="Home">
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
            redirect
          />
          <Stack.Screen name="Home" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </TamaguiProvider>
    </PaperProvider>
  );
}
