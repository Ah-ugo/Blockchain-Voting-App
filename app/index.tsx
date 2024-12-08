// import { router } from "expo-router";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import { H3, SizableText, YStack } from "tamagui";

const Splash = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/login");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo2.png")}
      />
      <YStack>
        <SizableText
          color={"black"}
          style={{
            fontFamily: "InterRegular",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Blockchain Voting
        </SizableText>
        {/* <SizableText>By</SizableText> */}
      </YStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    height: "70%",
  },
});

export default Splash;
