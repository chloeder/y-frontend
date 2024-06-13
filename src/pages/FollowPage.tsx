import { Avatar, Box, Button, Heading, Text } from "@chakra-ui/react";
import BottomBar from "../components/ui/mobile/BottomBar";
import Topbar from "../components/ui/navigations/Topbar";

export default function FollowPage() {
  return (
    <>
      {/* TopBar */}
      <Topbar />

      {/* Feed */}
      <Box display={"flex"} mt={"20px"} mx={"20px"} gap={"5px"}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Box flex={1} alignSelf={"center"}>
          <Heading size={"sm"}>Dan Abrahmov</Heading>
          <Text fontSize={"sm"} color={"gray.500"}>
            @danabramov
          </Text>
        </Box>
        <Button
          colorScheme={"blue"}
          size={"sm"}
          borderRadius={"full"}
          alignSelf={"center"}
        >
          Follow
        </Button>
      </Box>
      <Box display={"flex"} mt={"20px"} mx={"20px"} gap={"5px"}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Box flex={1} alignSelf={"center"}>
          <Heading size={"sm"}>Dan Abrahmov</Heading>
          <Text fontSize={"sm"} color={"gray.500"}>
            @danabramov
          </Text>
        </Box>
        <Button
          colorScheme={"blue"}
          size={"sm"}
          borderRadius={"full"}
          alignSelf={"center"}
        >
          Follow
        </Button>
      </Box>
      {/* End of Feed */}

      {/* BottomBar */}
      <BottomBar />
    </>
  );
}
