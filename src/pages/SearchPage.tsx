import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  CircleUser,
  Ellipsis,
  HeartHandshake,
  Home,
  UserRoundSearch,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SearchPage() {
  return (
    <Flex flexDirection={"column"}>
      {/* TopBar */}
      <Box
        position={"sticky"}
        top={"0"}
        backdropFilter="auto"
        backdropBlur={"20px"}
        zIndex={10}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
          my={"10px"}
          px={"15px"}
          gap={"20px"}
        >
          <Avatar size={"sm"} />
          <Input
            placeholder="Search"
            bg={"gray.800"}
            variant="filled"
            borderRadius={"full"}
            size={"sm"}
            me={"10px"}
          />
        </Box>

        {/* <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box
            position={"relative"}
            cursor={"pointer"}
            onClick={() => setFeedType("forYou")}
          >
            <Heading
              size={"sm"}
              color={feedType === "forYou" ? "white" : "gray"}
            >
              For You
            </Heading>
            {feedType === "forYou" && (
              <Box
                position={"absolute"}
                w={"100%"}
                h={"6px"}
                mt={"15px"}
                bg={"blue.600"}
                borderRadius={"full"}
              ></Box>
            )}
          </Box>
          <Box
            position={"relative"}
            cursor={"pointer"}
            onClick={() => setFeedType("following")}
          >
            <Heading
              size={"sm"}
              color={feedType === "following" ? "white" : "gray"}
            >
              Following
            </Heading>
            {feedType === "following" && (
              <Box
                position={"absolute"}
                w={"100%"}
                h={"6px"}
                mt={"15px"}
                bg={"blue.600"}
                borderRadius={"full"}
              ></Box>
            )}
          </Box>
        </Box> */}
        <Divider borderColor={"gray.600"} mt={"20px"} />
      </Box>

      {/* Content */}
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
        <Box alignSelf={"center"}>
          <Ellipsis size={20} color={"gray"} />
        </Box>
      </Box>

      {/* BottomBar */}
      <Box
        position={"fixed"}
        bottom={"0"}
        w={"100%"}
        h={"50px"}
        bg={"black"}
        zIndex={10}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          h={"100%"}
        >
          <Link to={"/"}>
            <Home color={location.pathname === "/" ? "white" : "gray"} />
          </Link>
          <Link to={"/search"}>
            <UserRoundSearch
              color={location.pathname === "/search" ? "white" : "gray"}
            />
          </Link>
          <Link to={"/follow"}>
            <HeartHandshake
              color={location.pathname === "/follow" ? "white" : "gray"}
            />
          </Link>
          <Link to={"/profile"}>
            <CircleUser
              color={location.pathname === "/profile" ? "white" : "gray"}
            />
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
