import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function Suggestion({
  fullName,
  username,
  photoProfile,
}: {
  fullName: string;
  username: string;
  photoProfile: string;
}) {
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
      <Button colorScheme={"blue"} size={"sm"} borderRadius={"full"}>
        Follow
      </Button>
    </Flex>
  );
}
