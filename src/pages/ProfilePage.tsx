import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Ellipsis, Heart, MessageSquareText } from "lucide-react";
import { useState } from "react";
import ProfileHeader from "../features/profile/components/ProfileHeader";

export default function ProfilePage() {
  const [profileType, setProfileType] = useState("posts");

  return (
    <Flex flexDirection={"column"}>
      {/* Profile Header */}
      <ProfileHeader />
      {/* End of Profile Header */}

      {/* Top Bar Content */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box
          position={"relative"}
          cursor={"pointer"}
          onClick={() => setProfileType("posts")}
        >
          <Heading
            size={"sm"}
            color={profileType === "posts" ? "white" : "gray"}
          >
            Posts
          </Heading>
          {profileType === "posts" && (
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
          onClick={() => setProfileType("replies")}
        >
          <Heading
            size={"sm"}
            color={profileType === "replies" ? "white" : "gray"}
          >
            Replies
          </Heading>
          {profileType === "replies" && (
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
          onClick={() => setProfileType("likes")}
        >
          <Heading
            size={"sm"}
            color={profileType === "likes" ? "white" : "gray"}
          >
            Likes
          </Heading>
          {profileType === "likes" && (
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
      {/* End of Top Bar */}

      {/* Content */}
      <Box display={"flex"} mt={"20px"} mx={"20px"}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Box ml={"10px"} flex={1}>
          <Box
            display={"flex"}
            gap={{ base: "0px", sm: "5px", md: "5px" }}
            flexWrap={"wrap"}
          >
            <Heading size={"sm"}>Dan Abrahmov</Heading>
            <Text as={"span"} fontSize={"sm"} color={"gray.500"}>
              @danabramov · 2d
            </Text>
          </Box>
          <Text fontSize={"sm"}>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam culpa
            corporis omnis quidem at harum eveniet iste, aperiam ipsa quia
            veritatis vel? Officia nobis recusandae commodi. Voluptatum rem
            dolorem minima.
          </Text>
          <Image src="https://bit.ly/dan-abramov" mt={"10px"} />
          <Box display={"flex"} mt={"10px"} gap={"10px"} color={"gray"}>
            <Box display={"flex"} alignItems={"center"}>
              <Heart size={20} /> <Text ml={"5px"}>10</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <MessageSquareText size={20} />
              <Text ml={"5px"}>10</Text>
            </Box>
          </Box>
        </Box>
        <Ellipsis size={20} color={"gray"} />
      </Box>
      <Divider borderColor={"gray.600"} mt={"20px"} />
    </Flex>
  );
}
