import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import logo from "../assets/img/y.svg";
import BottomBar from "../components/ui/mobile/BottomBar";
import FollowList from "../features/follow/components/FollowList";
import { FollowEntity } from "../features/follow/entities/follow.entity";
import { axiosInstance } from "../lib/axios";
import { getFollowEndPoint } from "../utils/follow.endpoint";
import { AuthUser } from "../features/auth/types/auth.type";

export default function FollowPage() {
  const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });
  const [followType, setFollowType] = useState<string>("follower");

  const END_POINT = getFollowEndPoint(followType);

  const { data: users, isPending } = useQuery<FollowEntity[]>({
    queryKey: ["follow", followType],
    queryFn: async () => {
      if (followType) {
        const response = await axiosInstance.get(END_POINT);

        return response.data.data;
      }
      return [];
    },
  });

  return (
    <>
      {/* TopBar */}
      <Box
        position={"sticky"}
        top={"0"}
        bg="rgba(0, 0, 0, 0.7)"
        backdropFilter="auto"
        backdropBlur={"40px"}
        zIndex={10}
      >
        {/* Logo */}
        <Box
          hideFrom={"md"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
          mb={"10px"}
          px={"15px"}
        >
          <Menu>
            <MenuButton>
              <Box
                display={{ xl: "flex" }}
                gap={"10px"}
                alignItems={"center"}
                width={"100%"}
              >
                <Avatar
                  size={"sm"}
                  src={authUser?.photoProfile}
                  name={authUser?.fullName}
                />
                <Box hideBelow={"xl"}>
                  <Heading size={"sm"}>{authUser?.fullName}</Heading>
                  <Text
                    display={{ base: "none", md: "flex" }}
                    fontSize={"xs"}
                    color={"gray.500"}
                  >
                    @{authUser?.username}
                  </Text>
                </Box>
              </Box>
            </MenuButton>
            <MenuList
              color={"white"}
              bg={"black"}
              boxShadow={"0px 0px 10px rgba(255, 255, 255, 0.4)"}
              border={"none"}
              bgColor={"black"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              {/* MenuItems are not rendered unless Menu is open */}
              <Button
                bg={"none"}
                as={Link}
                _hover={{ bg: "none" }}
                to="/profile"
                color={"white"}
              >
                Edit Profile
              </Button>
              <Button
                bg={"none"}
                color={"white"}
                _hover={{ bg: "none" }}
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Log out @{authUser?.username}
              </Button>
            </MenuList>
          </Menu>
          <Image src={logo} alt={"logo"} width={"50px"} />
          <Box ms={"40px"}></Box>
        </Box>

        <Box
          mt={{ md: "20px" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box
            position={"relative"}
            cursor={"pointer"}
            onClick={() => setFollowType("follower")}
          >
            <Heading
              size={"sm"}
              color={followType === "follower" ? "white" : "gray"}
            >
              Followers
            </Heading>
            {followType === "follower" && (
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
            onClick={() => setFollowType("following")}
          >
            <Heading
              size={"sm"}
              color={followType === "following" ? "white" : "gray"}
            >
              Followings
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
      {isPending ? (
        <Spinner color="blue.500" my={"2rem"} alignSelf={"center"} />
      ) : users?.length ? (
        users.map((user) => <FollowList key={user.id} {...user} />)
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"100vh"}
        >
          <Text size={"md"} fontStyle={"italic"} color={"gray.500"}>
            {followType === "follower"
              ? "No Follower Found"
              : "No Following Found"}
          </Text>
        </Box>
      )}
      {/* End of Feed */}

      {/* BottomBar */}
      <BottomBar />
    </>
  );
}
