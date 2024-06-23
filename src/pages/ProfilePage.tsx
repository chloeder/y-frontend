import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import ProfileHeader from "../features/profile/components/ProfileHeader";
import useFetchProfileThreads from "../hooks/useFetchProfileThreads";
import Skeleton from "../components/ui/Skeleton";
import ThreadList from "../features/home/components/ThreadList";

export default function ProfilePage() {
  const { thread, isPending, profileType, setProfileType } =
    useFetchProfileThreads();

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
      {isPending ? (
        <Skeleton />
      ) : thread?.length ? (
        thread.map((thread) => <ThreadList key={thread.id} {...thread} />)
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          my={"1rem"}
        >
          <Text size={"md"} fontStyle={"italic"} color={"gray.500"}>
            {profileType === "posts"
              ? "No post for you"
              : "People didn't post anything yet"}
          </Text>
        </Box>
      )}
    </Flex>
  );
}
