import {
  Avatar,
  Box,
  Button,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  CircleFadingPlus,
  CircleUser,
  HeartHandshake,
  Home,
  UserRoundSearch,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/img/Y.png";
import ModalPost from "../modals/ModalPost";

export default function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={{
        base: "center",
        md: "space-between",
        lg: "space-between",
        xl: "space-between",
      }}
      py={"20px"}
      px={"30px"}
      width={{ base: "6rem", md: "6rem", lg: "6rem", xl: "40%" }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={{
          base: "center",
          md: "center",
          lg: "center",
          xl: "flex-start",
        }}
        gap={{ base: "20px", md: "40px", lg: "40px", xl: "30px" }}
      >
        <Link to={"/"}>
          <Image
            src={logo}
            alt={"logo"}
            boxSize={"40px"}
            objectFit={"cover"}
            border={"1px"}
          />
        </Link>
        <Link to={"/"}>
          <Box display={{ xl: "flex" }} gap={"15px"} alignItems={"center"}>
            <Home
              size={30}
              color={location.pathname === "/" ? "white" : "gray"}
            />
            <Text
              hideBelow={"xl"}
              fontSize={"25px"}
              color={location.pathname === "/" ? "white" : "gray"}
            >
              Home
            </Text>
          </Box>
        </Link>
        <Link to={"/search"}>
          <Box display={{ xl: "flex" }} gap={"15px"} alignItems={"center"}>
            <UserRoundSearch
              size={30}
              color={location.pathname === "/search" ? "white" : "gray"}
            />
            <Text
              hideBelow={"xl"}
              fontSize={"25px"}
              color={location.pathname === "/search" ? "white" : "gray"}
            >
              Search
            </Text>
          </Box>
        </Link>
        <Link to={"/follow"}>
          <Box display={{ xl: "flex" }} gap={"15px"} alignItems={"center"}>
            <HeartHandshake
              size={30}
              color={location.pathname === "/follow" ? "white" : "gray"}
            />
            <Text
              hideBelow={"xl"}
              fontSize={"25px"}
              color={location.pathname === "/follow" ? "white" : "gray"}
            >
              Follow
            </Text>
          </Box>
        </Link>
        <Link to={"/profile"}>
          <Box display={{ xl: "flex" }} gap={"15px"} alignItems={"center"}>
            <CircleUser
              size={30}
              color={location.pathname === "/profile" ? "white" : "gray"}
            />
            <Text
              hideBelow={"xl"}
              fontSize={"25px"}
              color={location.pathname === "/profile" ? "white" : "gray"}
            >
              Profile
            </Text>
          </Box>
        </Link>

        <Show below={"xl"}>
          <IconButton
            borderRadius={"full"}
            colorScheme="blue"
            aria-label="Call Segun"
            boxSize={"50px"}
            icon={<CircleFadingPlus />}
            onClick={onOpen}
          />

          <ModalPost isOpen={isOpen} onClose={onClose} size={"xl"} />
        </Show>

        <Show above={"xl"}>
          <Button
            borderRadius={"full"}
            colorScheme="blue"
            aria-label="Call Segun"
            boxSize={"40px"}
            width={"100%"}
            onClick={onOpen}
          >
            <Text fontSize={"20px"}>Post</Text>
          </Button>
          <ModalPost isOpen={isOpen} onClose={onClose} size={"xl"} />
        </Show>
      </Box>

      <Menu isLazy>
        <MenuButton>
          <Box
            display={{ xl: "flex" }}
            gap={"10px"}
            alignItems={"center"}
            width={"100%"}
          >
            <Avatar />
            <Box hideBelow={"xl"}>
              <Heading size={"sm"}>Steward Lumowa </Heading>
              <Text
                display={{ base: "none", md: "flex" }}
                fontSize={"xs"}
                color={"gray.500"}
              >
                @steward_lumowa
              </Text>
            </Box>
          </Box>
        </MenuButton>
        <MenuList color={"gray.500"} bgColor={"black"}>
          {/* MenuItems are not rendered unless Menu is open */}
          <MenuItem
            bg={"black"}
            as={Link}
            to="/profile"
            _hover={{ color: "white" }}
          >
            Edit Profile
          </MenuItem>
          <MenuItem bg={"black"} as="a" href="#" _hover={{ color: "white" }}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
