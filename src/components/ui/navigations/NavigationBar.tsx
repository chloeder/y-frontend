import { Avatar, Box, IconButton, Image } from "@chakra-ui/react";
import {
  CircleFadingPlus,
  CircleUser,
  HeartHandshake,
  Home,
  UserRoundSearch,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/y.svg";

export default function NavigationBar() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
      width={"15rem"}
    >
      <Link to={"/"}>
        <Image src={logo} alt={"logo"} width={"80px"} objectFit={"cover"} />
      </Link>
      <Link to={"/"}>
        <Home size={30} color={location.pathname === "/" ? "white" : "gray"} />
      </Link>
      <Link to={"/search"}>
        <UserRoundSearch
          size={30}
          color={location.pathname === "/search" ? "white" : "gray"}
        />
      </Link>
      <Link to={"/follow"}>
        <HeartHandshake
          size={30}
          color={location.pathname === "/follow" ? "white" : "gray"}
        />
      </Link>
      <Link to={"/profile"}>
        <CircleUser
          size={30}
          color={location.pathname === "/profile" ? "white" : "gray"}
        />
      </Link>
      <IconButton
        borderRadius={"full"}
        colorScheme="blue"
        aria-label="Call Segun"
        boxSize={"50px"}
        icon={<CircleFadingPlus />}
      />

      <Avatar size="sm" />
    </Box>
  );
}
