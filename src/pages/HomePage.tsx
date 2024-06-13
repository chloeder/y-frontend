import {
  Avatar,
  Box,
  Divider,
  Heading,
  IconButton,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";
import {
  CircleFadingPlus,
  Ellipsis,
  Heart,
  MessageSquareText,
} from "lucide-react";
import Topbar from "../components/ui/navigations/Topbar";

export default function HomePage() {
  return (
    <>
      {/* TopBar */}
      <Topbar />

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam culpa
            corporis omnis quidem at harum eveniet iste, aperiam ipsa quia
            veritatis vel? Officia nobis recusandae commodi. Voluptatum rem
            dolorem minima.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam culpa
            corporis omnis quidem at harum eveniet iste, aperiam ipsa quia
            veritatis vel? Officia nobis recusandae commodi. Voluptatum rem
            dolorem minima.
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam culpa
            corporis omnis quidem at harum eveniet iste, aperiam ipsa quia
            veritatis vel? Officia nobis recusandae commodi. Voluptatum rem
            dolorem minima.
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
    </>
  );
}
