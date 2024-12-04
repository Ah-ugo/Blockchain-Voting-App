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
import { Chainlink, Chart, Link2, Unlock } from "iconsax-react-native";

export default function PollCard() {
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
          Presidential Election 2020
        </SizableText>

        <Paragraph
          theme="alt2"
          color={"lightgray"}
          style={{ fontFamily: "InterMedium" }}
        >
          Now available
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
              <Unlock size={15} color="white" />
              <SizableText
                style={{ color: "white", fontFamily: "InterMedium" }}
              >
                Voting Open
              </SizableText>
            </XStack>
            <XStack alignItems="center" gap={5}>
              <Link2 size={20} color="white" />
              <SizableText
                style={{ color: "white", fontFamily: "InterMedium" }}
              >
                10,000 votes
              </SizableText>
            </XStack>
          </YStack>
          <XStack alignItems="center" gap={10}>
            <Chart size={20} color="white" />
            <Button
              borderRadius="$5"
              size={"$3"}
              style={{ fontFamily: "InterLight" }}
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
          src="https://images.theconversation.com/files/138571/original/image-20160921-12478-i4e5oe.jpg"
        />
      </Card.Background>
    </Card>
  );
}
