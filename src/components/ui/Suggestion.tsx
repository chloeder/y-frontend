import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import useFollow from "../../hooks/useFollow";

export default function Suggestion({
  id,
  fullName,
  username,
  photoProfile,
}: {
  id: string;
  fullName: string;
  username: string;
  photoProfile: string;
}) {
  const { onFollow, isPending } = useFollow(id);

  return (
    <Flex gap={"10px"} alignItems={"center"} justifyContent={"space-between"}>
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <Avatar name={username} src={photoProfile} />
        <Box>
          <Heading size={"sm"}>{fullName}</Heading>
          <Text fontSize={"xs"} color={"gray.400"}>
            @{username}
          </Text>
        </Box>
      </Box>
      <Button
        colorScheme={"blue"}
        size={"sm"}
        borderRadius={"full"}
        alignSelf={"center"}
        onClick={onFollow}
        isLoading={isPending}
      >
        Follow
      </Button>
    </Flex>
  );
}
