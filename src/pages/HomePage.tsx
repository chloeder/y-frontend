import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Show,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  CircleFadingPlus,
  CircleUser,
  Ellipsis,
  Heart,
  HeartHandshake,
  Home,
  MessageSquareText,
  UserRoundSearch,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/y.svg";

export default function HomePage() {
  const [isLargerThan768] = useMediaQuery("(max-width: 425px)");
  const [feedType, setFeedType] = useState("forYou");
  const location = useLocation();

  return (
    <Flex position={"relative"}>
      {/* RightBar & BottomBar */}
      <Box
        position={{ base: "fixed", sm: "fixed", md: "static" }}
        bottom={{ base: "0px", sm: "0px" }}
        w={{ base: "100%", sm: "100%", md: "30%" }}
        h={{ base: "50px", sm: "50px", md: "auto" }}
        bg={"black"}
        zIndex={{ base: 10, sm: 10 }}
      >
        <Box
          position={{ md: "fixed" }}
          top={{ md: "10px" }}
          left={{ md: "2rem" }}
          display={"flex"}
          flexDirection={{ md: "column" }}
          alignItems={"center"}
          justifyContent={{
            base: "space-around",
            sm: "space-around",
            md: "none",
          }}
          gap={{ md: "30px" }}
          h={{ base: "100%", sm: "100%", md: "auto" }}
        >
          <Show above="md">
            <Link to={"/"}>
              <Image
                src={logo}
                alt={"logo"}
                width={"80px"}
                objectFit={"cover"}
              />
            </Link>
          </Show>

          <Link to={"/"}>
            <Home
              size={isLargerThan768 ? 24 : 30}
              color={location.pathname === "/" ? "white" : "gray"}
            />
          </Link>
          <Link to={"/search"}>
            <UserRoundSearch
              size={isLargerThan768 ? 24 : 30}
              color={location.pathname === "/search" ? "white" : "gray"}
            />
          </Link>
          <Link to={"/follow"}>
            <HeartHandshake
              size={isLargerThan768 ? 24 : 30}
              color={location.pathname === "/follow" ? "white" : "gray"}
            />
          </Link>
          <Link to={"/profile"}>
            <CircleUser
              size={isLargerThan768 ? 24 : 30}
              color={location.pathname === "/profile" ? "white" : "gray"}
            />
          </Link>

          <Show above="md">
            <IconButton
              borderRadius={"full"}
              colorScheme="blue"
              aria-label="Call Segun"
              boxSize={"50px"}
              icon={<CircleFadingPlus />}
            />
          </Show>

          <Box position={"fixed"} bottom={{ md: "20px" }} hideBelow={"md"}>
            <Avatar size="sm" />
          </Box>
        </Box>
      </Box>

      <Flex flexDirection={"column"} borderLeft={{ md: "1px solid #2c3340" }}>
        {/* TopBar */}
        <Box
          position={"sticky"}
          top={"0"}
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
              <Heading
                size={"sm"}
                color={feedType === "forYou" ? "white" : "gray"}
              >
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

        {/* Feed */}
        <Box display={"flex"} mt={"20px"} mx={"20px"}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box ml={"10px"} flex={1}>
            <Box
              display={"flex"}
              gap={{ base: "0px", sm: "5px", md: "5px" }}
              flexWrap={"wrap"}
            >
              <Heading size={"sm"}>Dan Abrahmov</Heading>
              <Text as={"span"} fontSize={"sm"} color={"gray.500"}>
                @danabramov · 2d
              </Text>
            </Box>
            <Text fontSize={"sm"}>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              culpa corporis omnis quidem at harum eveniet iste, aperiam ipsa
              quia veritatis vel? Officia nobis recusandae commodi. Voluptatum
              rem dolorem minima.
            </Text>
            <Image src="https://bit.ly/dan-abramov" mt={"10px"} />
            <Box display={"flex"} mt={"10px"} gap={"10px"} color={"gray"}>
              <Box display={"flex"} alignItems={"center"}>
                <Heart size={20} /> <Text ml={"5px"}>10</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <MessageSquareText size={20} />
                <Text ml={"5px"}>10</Text>
              </Box>
            </Box>
          </Box>
          <Ellipsis size={20} color={"gray"} />
        </Box>
        <Divider borderColor={"gray.600"} my={"20px"} />
        <Box display={"flex"} mx={"20px"}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box ml={"10px"} flex={1}>
            <Heading size={"sm"}>Dan Abrahmov</Heading>
            <Text fontSize={"sm"} color={"gray.500"}>
              @danabramov · 2d
            </Text>
            <Text fontSize={"sm"}>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              culpa corporis omnis quidem at harum eveniet iste, aperiam ipsa
              quia veritatis vel? Officia nobis recusandae commodi. Voluptatum
              rem dolorem minima.
            </Text>
            <Image src="https://bit.ly/dan-abramov" mt={"10px"} />
            <Box display={"flex"} mt={"10px"} gap={"10px"} color={"gray"}>
              <Box display={"flex"} alignItems={"center"}>
                <Heart size={20} /> <Text ml={"5px"}>10</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <MessageSquareText size={20} />
                <Text ml={"5px"}>10</Text>
              </Box>
            </Box>
          </Box>
          <Ellipsis size={20} color={"gray"} />
        </Box>
        <Divider borderColor={"gray.600"} my={"20px"} />
        <Box display={"flex"} mx={"20px"}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box ml={"10px"} flex={1}>
            <Heading size={"sm"}>Dan Abrahmov</Heading>
            <Text fontSize={"sm"} color={"gray.500"}>
              @danabramov · 2d
            </Text>
            <Text fontSize={"sm"}>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              culpa corporis omnis quidem at harum eveniet iste, aperiam ipsa
              quia veritatis vel? Officia nobis recusandae commodi. Voluptatum
              rem dolorem minima.
            </Text>
            <Image src="https://bit.ly/dan-abramov" mt={"10px"} />
            <Box display={"flex"} mt={"10px"} gap={"10px"} color={"gray"}>
              <Box display={"flex"} alignItems={"center"}>
                <Heart size={20} /> <Text ml={"5px"}>10</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <MessageSquareText size={20} />
                <Text ml={"5px"}>10</Text>
              </Box>
            </Box>
          </Box>
          <Ellipsis size={20} color={"gray"} />
        </Box>
        <Divider borderColor={"gray.600"} my={"20px"} />
        {/* End of Feed */}

        <Show below="md">
          <IconButton
            borderRadius={"full"}
            position={"fixed"}
            zIndex={10}
            bottom={"80px"}
            right={"20px"}
            colorScheme="blue"
            aria-label="Call Segun"
            boxSize={"60px"}
            icon={<CircleFadingPlus />}
          />
        </Show>
      </Flex>
    </Flex>
  );
}
