import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function Suggestion() {
  return (
    <Flex gap={"10px"} alignItems={"center"}>
      <Avatar />
      <Box>
        <Heading size={"sm"}>Steward Lumowa</Heading>
        <Text fontSize={"xs"} color={"gray.400"}>
          @steward_lumowa
        </Text>
      </Box>
      <Button colorScheme={"blue"} size={"sm"} borderRadius={"full"}>
        Follow
      </Button>
    </Flex>
  );
}
