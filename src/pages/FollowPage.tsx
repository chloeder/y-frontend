import {
  Avatar,
  Box,
  Divider,
  Heading,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import logo from "../assets/img/y.svg";
import BottomBar from "../components/ui/mobile/BottomBar";
import FollowList from "../features/follow/components/FollowList";
import { FollowEntity } from "../features/follow/entities/follow.entity";
import { axiosInstance } from "../lib/axios";
import { getFollowEndPoint } from "../utils/follow.endpoint";

export default function FollowPage() {
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
          <Avatar size={"sm"} />
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
      ) : (
        users && users.map((user) => <FollowList key={user.id} {...user} />)
      )}
      {/* End of Feed */}

      {/* BottomBar */}
      <BottomBar />
    </>
  );
}
