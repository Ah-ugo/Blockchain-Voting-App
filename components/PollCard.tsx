import { View, Text } from "react-native";
import React from "react";
import {
  Button,
  Card,
  H2,
  Image,
  Paragraph,
  SizableText,
  XStack,
  YStack,
} from "tamagui";
import { Chainlink, Chart, Link2, Lock1, Unlock } from "iconsax-react-native";
import { useRouter } from "expo-router";
// import { router } from "expo-router";

export default function PollCard({
  title,
  description,
  isActive,
  total_vote,
  url,
  id,
}: any) {
  const router = useRouter();
  return (
    <Card
      elevate
      //   size="$4"
      radiused
      //   bordered
      animation="bouncy"
      //   width={250}
      style={{ height: 200, width: "100%", borderRadius: 30 }}
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
    >
      <Card.Header>
        {/* <H2>Sony A7IV</H2> */}
        {/* <Paragraph theme="alt2">Now available</Paragraph> */}
        <SizableText
          style={{ fontSize: 20, fontFamily: "InterMedium", color: "white" }}
        >
          {title}
        </SizableText>

        <Paragraph
          theme="alt2"
          color={"lightgray"}
          style={{ fontFamily: "InterMedium" }}
        >
          {description}
        </Paragraph>
      </Card.Header>
      <Card.Footer
        backgroundColor={"#0F52BA"}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        padding={10}
      >
        {/* <XStack flex={1} /> */}
        <XStack
          justifyContent="space-between"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <YStack>
            <XStack alignItems="center" gap={5}>
              {isActive ? (
                <Unlock size={15} color="white" />
              ) : (
                <Lock1 size={15} color="white" />
              )}
              <SizableText
                style={{ color: "white", fontFamily: "InterMedium" }}
              >
                {isActive ? "Voting Open" : "Voting Closed"}
              </SizableText>
            </XStack>
            <XStack alignItems="center" gap={5}>
              <Link2 size={20} color="white" />
              <SizableText
                style={{ color: "white", fontFamily: "InterMedium" }}
              >
                {total_vote} votes
              </SizableText>
            </XStack>
          </YStack>
          <XStack alignItems="center" gap={10}>
            <Chart size={20} color="white" />
            <Button
              borderRadius="$5"
              size={"$3"}
              style={{ fontFamily: "InterLight" }}
              onPress={() => router.push(`/${id}`)}
            >
              Vote
            </Button>
          </XStack>
        </XStack>
      </Card.Footer>
      <Card.Background>
        <Image
          style={{
            height: 200,
            width: "100%",
            objectFit: "cover",
            borderRadius: 10,
          }}
          src={url}
        />
      </Card.Background>
    </Card>
  );
}
