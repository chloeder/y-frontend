import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
          <Text fontSize="sm" color="gray.500" textAlign={"center"}>
            Try searching for something else or check the spelling of what you
            searched for...
          </Text>
        </Flex>
      )}
    </>
  );
}
