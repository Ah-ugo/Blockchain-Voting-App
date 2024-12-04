import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import {
  Avatar,
  Button,
  H2,
  Input,
  SizableText,
  Stack,
  XStack,
  YStack,
} from "tamagui";
import { SearchNormal1 } from "iconsax-react-native";
import PollCard from "@/components/PollCard";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const tabs = ["Ongoing", "Voted", "Ended"];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar.Header
        statusBarHeight={0}
        style={{ backgroundColor: "transparent" }}
      >
        <XStack
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
          paddingHorizontal={"$3"}
        >
          <SizableText style={{ fontFamily: "InterMedium", fontSize: 20 }}>
            Election
          </SizableText>

          <Avatar circular size="$3">
            <Avatar.Image
              accessibilityLabel="Nate Wienert"
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
            />
            <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
          </Avatar>
        </XStack>
      </Appbar.Header>
      <View style={{ paddingBottom: 20 }}>
        <XStack
          height={40}
          marginTop={2}
          marginBottom={10}
          marginHorizontal="$4"
          alignItems="center"
        >
          <Input
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            flex={1}
            placeholder="Search..."
            paddingLeft={50}
            height={40}
            borderColor={"#AEACAC"}
          />
          <Stack
            position="absolute"
            left={0}
            bottom={0}
            height={40}
            width={40}
            alignItems="center"
            justifyContent="center"
          >
            <SearchNormal1 size="24" color="#AEACAC" />
          </Stack>
        </XStack>

        <XStack
          paddingHorizontal={"$4"}
          borderRadius="$pill"
          overflow="hidden"
          gap={15}
          marginTop={2}
        >
          {tabs.map((tab) => (
            <Button
              key={tab}
              size="$3"
              style={{ fontFamily: "InterMedium", borderRadius: 10 }}
              onPress={() => setActiveTab(tab)} // Update active tab on click
              backgroundColor={activeTab === tab ? "white" : "transparent"} // Active/inactive background color
              color={activeTab === tab ? "black" : "$gray11"} // Active/inactive text color
              hoverStyle={{
                backgroundColor: activeTab === tab ? "white" : "$gray3", // Hover effects
              }}
              pressStyle={{
                backgroundColor: "white", // Pressed state effect
              }}
            >
              {tab}
            </Button>
          ))}
        </XStack>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {activeTab === "Ongoing" && (
            <YStack marginHorizontal={"$4"} marginTop={"$2"} gap={"$3"}>
              {/* <H2>Profile Content</H2> */}
              <PollCard />
              <PollCard />
              <PollCard />
              <PollCard />
              <PollCard />
              <PollCard />
            </YStack>
          )}
          {activeTab === "Voted" && (
            <YStack marginHorizontal={"$4"} marginTop={"$4"}>
              <H2>Connections Content</H2>
            </YStack>
          )}
          {activeTab === "Ended" && (
            <YStack marginHorizontal={"$4"} marginTop={"$4"}>
              <H2>Notifications Content</H2>
            </YStack>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
