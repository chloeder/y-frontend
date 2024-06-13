import { Box } from "@chakra-ui/react";
import {
  CircleUser,
  HeartHandshake,
  Home,
  UserRoundSearch,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <>
      {/* RightBar & BottomBar */}
      <Box
        hideFrom={"md"}
        position={"fixed"}
        bottom={"0px"}
        w={"100%"}
        h={"50px"}
        bg={"black"}
        zIndex={10}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          h={"100%"}
        >
          <Link to={"/"}>
            <Home
              size={30}
              color={location.pathname === "/" ? "white" : "gray"}
            />
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
        </Box>
      </Box>
    </>
  );
}
