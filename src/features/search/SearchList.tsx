import { Avatar, Box, Button, Heading, Text } from "@chakra-ui/react";

export default function SearchList({
  fullName,
  username,
  photoProfile,
}: {
  id: string;
  fullName: string;
  username: string;
  photoProfile: string;
}) {
  return (
    <Box display={"flex"} mt={"20px"} mx={"20px"} gap={"5px"}>
      <Avatar name={username} src={photoProfile} />
      <Box flex={1} alignSelf={"center"}>
        <Heading size={"sm"}>{fullName}</Heading>
        <Text fontSize={"sm"} color={"gray.500"}>
          @{username}
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
  );
}
