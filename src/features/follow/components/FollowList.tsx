import { Avatar, Box, Heading, Text } from "@chakra-ui/react";
import ButtonFollow from "../../../components/ui/button/ButtonFollow";
import useFollow from "../../../hooks/useFollow";

export default function FollowList({
  id,
  fullName,
  username,
  photoProfile,
  isFollowing,
}: {
  id: string;
  fullName: string;
  username: string;
  photoProfile: string;
  isFollowing: boolean;
}) {
  const { onFollow, isPending } = useFollow(id);

  return (
    <Box display={"flex"} mt={"20px"} mx={"20px"} gap={"5px"}>
      <Avatar name={username} src={photoProfile} />
      <Box flex={1} alignSelf={"center"}>
        <Heading size={"sm"}>{fullName}</Heading>
        <Text fontSize={"sm"} color={"gray.500"}>
          @{username}
        </Text>
      </Box>
      <ButtonFollow
        isFollowing={isFollowing}
        isLoading={isPending}
        onClick={onFollow}
      />
    </Box>
  );
}
