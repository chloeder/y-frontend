import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import SearchList from "../features/search/SearchList";
import { useQuery } from "@tanstack/react-query";
import { AuthUser } from "../features/auth/types/auth.type";
import useSearch from "../hooks/useSearch";

export default function SearchPage() {
  const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });
  const { data, isPending, handleSearch, search } = useSearch();

  return (
    <>
      {/* TopBar */}
      <Box
        position={"sticky"}
        top={"0"}
        bg="rgba(0, 0, 0, 0.4)"
        backdropFilter="auto"
        backdropBlur={"40px"}
        zIndex={10}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
          my={"10px"}
          px={"15px"}
          gap={"20px"}
        >
          <Avatar
            name={authUser?.username}
            size={"sm"}
            src={authUser?.photoProfile}
          />
          <Input
            placeholder="Search"
            bg={"gray.800"}
            variant="filled"
            borderRadius={"full"}
            size={"sm"}
            me={"10px"}
            onChange={handleSearch}
          />
        </Box>
        <Divider borderColor={"gray.600"} mt={"20px"} />
      </Box>

      {/* Content */}
      {isPending ? (
        <Spinner color="blue.500" my={"2rem"} alignSelf={"center"} />
      ) : data?.length ? (
        data.map((user) => (
          <SearchList
            key={user.id}
            id={user.id}
            fullName={user.fullName}
            username={user.username}
            photoProfile={user.photoProfile}
            isFollowing={user.isFollowing}
          />
        ))
      ) : (
        <Flex flexDirection="column" alignItems="center" gap="10px" m={"auto"}>
          <Heading size="md" color="white">
            {search ? `No results found for ${search}` : "Search for something"}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Try searching for something else or check the spelling of what you
            searched for...
          </Text>
        </Flex>
      )}
    </>
  );
}
