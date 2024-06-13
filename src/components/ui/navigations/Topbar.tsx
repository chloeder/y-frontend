import { Avatar, Box, Divider, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import logo from "../../../assets/img/y.svg";

export default function Topbar() {
  const [feedType, setFeedType] = useState<string>("forYou");

  return (
    <Box
      position={"sticky"}
      top={"0"}
      bg="rgba(0, 0, 0, 0.7)"
      backdropFilter="auto"
      backdropBlur={"40px"}
      zIndex={10}
    >
      {/* Logo */}
      <Box
        hideFrom={"md"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"100%"}
        mb={"10px"}
        px={"15px"}
      >
        <Avatar size={"sm"} />
        <Image src={logo} alt={"logo"} width={"50px"} />
        <Box ms={"40px"}></Box>
      </Box>

      <Box
        mt={{ md: "20px" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box
          position={"relative"}
          cursor={"pointer"}
          onClick={() => setFeedType("forYou")}
        >
          <Heading size={"sm"} color={feedType === "forYou" ? "white" : "gray"}>
            For You
          </Heading>
          {feedType === "forYou" && (
            <Box
              position={"absolute"}
              w={"100%"}
              h={"6px"}
              mt={"15px"}
              bg={"blue.600"}
              borderRadius={"full"}
            ></Box>
          )}
        </Box>
        <Box
          position={"relative"}
          cursor={"pointer"}
          onClick={() => setFeedType("following")}
        >
          <Heading
            size={"sm"}
            color={feedType === "following" ? "white" : "gray"}
          >
            Following
          </Heading>
          {feedType === "following" && (
            <Box
              position={"absolute"}
              w={"100%"}
              h={"6px"}
              mt={"15px"}
              bg={"blue.600"}
              borderRadius={"full"}
            ></Box>
          )}
        </Box>
      </Box>
      <Divider borderColor={"gray.600"} mt={"20px"} />
    </Box>
  );
}
