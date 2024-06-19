import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  CalendarDays,
  Ellipsis,
  Heart,
  MessageSquareText,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalProfile from "../components/ui/modals/ModalProfile";
import { useQuery } from "@tanstack/react-query";
import { AuthUser } from "../features/auth/types/auth.type";
import moment from "moment";

export default function ProfilePage() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [profileType, setProfileType] = useState("posts");
  const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });

  return (
    <Flex flexDirection={"column"}>
      {/* TopBar */}
      <Box
        position={"sticky"}
        top={"0"}
        bg="rgba(0, 0, 0, 0.5)"
        backdropFilter="auto"
        backdropBlur={"20px"}
        zIndex={10}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          w={"100%"}
          mb={"10px"}
          px={"15px"}
          my={"10px"}
          gap={"20px"}
        >
          <Link to={"/"}>
            <ArrowLeft />
          </Link>
          <Box display={"flex"} flexDirection={"column"}>
            <Heading size={"sm"}>Steward Lumowa</Heading>
            <Text fontSize={"xs"} color={"gray.400"}>
              @steward_lumowa
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Profile Header */}
      <Box position={"relative"} display={"flex"} flexDirection={"column"}>
        <Image
          src={authUser?.coverImage || "https://bit.ly/3y1Zv3I"}
          alt={"logo"}
          width={"100%"}
          height={"200px"}
        />

        <Box position={"absolute"} top={"150px"} left={"40px"}>
          <Avatar
            boxSize={"100px"}
            border={"2px solid black"}
            name={authUser?.username}
            src={authUser?.photoProfile}
          />
        </Box>

        <Box display={"flex"} flexDirection={"column"} mx={"20px"} mb={"40px"}>
          <Button
            width={"110px"}
            size={"sm"}
            border={"1px solid"}
            borderColor={"gray.500"}
            borderRadius={"full"}
            bg={"none"}
            color={"white"}
            alignSelf={"flex-end"}
            mt={"10px"}
            onClick={onOpen}
          >
            Edit Profile
          </Button>

          <ModalProfile
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "full", sm: "full", md: "lg", lg: "xl", xl: "2xl" }}
          />

          <Box mt={"20px"} mb={"10px"}>
            <Heading size={"md"}>{authUser?.fullName}</Heading>
            <Text color={"gray.500"} fontSize={"sm"} mb={"10px"}>
              @{authUser?.username}
            </Text>
            <Text>{authUser?.bio}</Text>
            <Text
              as={"span"}
              color={"gray.500"}
              fontSize={"sm"}
              mt={"15px"}
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
            >
              <CalendarDays size={"1rem"} color={"gray"} />
              Joined {moment(authUser?.createdAt).format("LL")}
            </Text>
          </Box>

          <Box display={"flex"} gap={"20px"}>
            <Text fontSize={"sm"} color={"gray.500"}>
              <Text fontWeight={"bold"} as={"span"} color={"white"}>
                {authUser?.followings}
              </Text>{" "}
              Following
            </Text>
            <Text fontSize={"sm"} color={"gray.500"}>
              <Text fontWeight={"bold"} as={"span"} color={"white"}>
                {authUser?.followers}
              </Text>{" "}
              Followers
            </Text>
          </Box>
        </Box>

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
      </Box>
      {/* End of Profile Header */}

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
