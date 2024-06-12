import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  CircleUser,
  Ellipsis,
  HeartHandshake,
  Home,
  UserRoundSearch,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/y.svg";

export default function FollowPage() {
  const [followType, setfollowType] = useState("followers");
  const location = useLocation();

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
          mb={"10px"}
          px={"15px"}
        >
          <Avatar size={"sm"} />
          <Image src={logo} alt={"logo"} width={"50px"} />
          <Box ms={"40px"}></Box>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box
            position={"relative"}
            cursor={"pointer"}
            onClick={() => setfollowType("followers")}
          >
            <Heading
              size={"sm"}
              color={followType === "followers" ? "white" : "gray"}
            >
              Followers
            </Heading>
            {followType === "followers" && (
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
            onClick={() => setfollowType("following")}
          >
            <Heading
              size={"sm"}
              color={followType === "following" ? "white" : "gray"}
            >
              Following
            </Heading>
            {followType === "following" && (
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
        </Box>
        <Divider borderColor={"gray.600"} mt={"20px"} />
      </Box>

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
        <Box alignSelf={"center"}>
          <Ellipsis size={20} color={"gray"} />
        </Box>
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
        <Box alignSelf={"center"}>
          <Ellipsis size={20} color={"gray"} />
        </Box>
      </Box>
      {/* End of Feed */}

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
