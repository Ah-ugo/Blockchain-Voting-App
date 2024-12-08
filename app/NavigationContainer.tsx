import { useContext, useEffect } from "react";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "@/context/AuthContext";

export const NavigationContainer = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      setIsLoggedIn(!!token); // Set to true if token exists, false otherwise
    };

    checkAuthStatus();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" />
          <Stack.Screen name="[id]" />
          <Stack.Screen name="+not-found" />
        </>
      ) : (
        <>
          <Stack.Screen name="index" />
          <Stack.Screen
            name="login"
            //   initialParams={{ handleLogin1: handleLogin }}
          />
          <Stack.Screen name="register" />
        </>
      )}
    </Stack>
  );
};
