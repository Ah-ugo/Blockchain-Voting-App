import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import { createTamagui, TamaguiProvider, View } from "tamagui";
import defaultConfig from "@tamagui/config/v3";
import { StatusBar } from "expo-status-bar";

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

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();

      if (loaded) {
        SplashScreen.hideAsync();
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await SplashScreen.hideAsync();
      setAppIsReady(true);
    }

    prepare();
  }, []);

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
        <StatusBar backgroundColor="transparent" />
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
            // redirect
          />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />

          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="[id]" options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="+not-found" /> */}
        </Stack>
      </TamaguiProvider>
    </PaperProvider>
  );
}
