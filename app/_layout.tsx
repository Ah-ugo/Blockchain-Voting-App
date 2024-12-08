import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import { createTamagui, TamaguiProvider } from "tamagui";
import defaultConfig from "@tamagui/config/v3";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "@/context/AuthContext";
import { NavigationContainer } from "./NavigationContainer";

const config = createTamagui(defaultConfig);

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "Home",
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate initialization delay
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    };
    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) return null;

  return (
    <AuthProvider>
      <PaperProvider>
        <TamaguiProvider config={config}>
          <StatusBar backgroundColor="transparent" />
          <NavigationContainer />
        </TamaguiProvider>
      </PaperProvider>
    </AuthProvider>
  );
}
