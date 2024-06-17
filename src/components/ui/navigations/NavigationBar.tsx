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
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CircleFadingPlus,
  CircleUser,
  HeartHandshake,
  Home,
  UserRoundSearch,
} from "lucide-react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/img/Y.png";
import { AuthUser } from "../../../features/auth/types/auth.type";
import { axiosInstance } from "../../../lib/axios";
import ModalPost from "../modals/ModalPost";

export default function NavigationBar() {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });

  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => {
      try {
        const res = await axiosInstance.post("/auth/logout", null, {
          withCredentials: true,
        });
        return res.data;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    },
    onSuccess: () => {
      toast.success("Logout Success");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      queryClient.invalidateQueries({ queryKey: ["threads"] });
    },
    onError: () => {
      toast.error("Failed to logout");
    },
  });

  if (isPending)
    return (
      <Box
        h="100vh"
        w="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="#1D1D1D"
      >
        <Spinner
          thickness="5px"
          emptyColor="gray.200"
          color="#04A51E"
          size="xl"
        />
      </Box>
    );

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

      {authUser && (
        <Menu>
          <MenuButton>
            <Box
              display={{ xl: "flex" }}
              gap={"10px"}
              alignItems={"center"}
              width={"100%"}
            >
              <Avatar src={authUser.photoProfile} name={authUser.fullName} />
              <Box hideBelow={"xl"}>
                <Heading size={"sm"}>{authUser.fullName}</Heading>
                <Text
                  display={{ base: "none", md: "flex" }}
                  fontSize={"xs"}
                  color={"gray.500"}
                >
                  @{authUser.username}
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
            <MenuItem
              bg={"black"}
              as="button"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Box>
  );
}
