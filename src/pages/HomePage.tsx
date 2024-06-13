import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  IconButton,
  Image,
  Show,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Ellipsis, Heart, ImagePlus, MessageSquareText } from "lucide-react";
import Topbar from "../components/ui/navigations/Topbar";
import FloatingButton from "../components/ui/mobile/FloatingButton";

export default function HomePage() {
  return (
    <>
      {/* TopBar */}
      <Topbar />

      {/* Feed Post */}
      <Show above={"md"}>
        <Box display={"flex"} my={"20px"} mx={"20px"}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box display={"flex"} flexDirection={"column"} width={"100%"}>
            <Textarea
              placeholder="What's on your mind, Dan?"
              size={"md"}
              border={"none"}
              width={"100%"}
              resize={"none"}
              focusBorderColor="none"
            />
            <Divider borderColor={"gray.600"} my={"1rem"} />
            <Box
              mx={"1rem"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <IconButton
                variant={"unstyled"}
                color={"blue.500"}
                aria-label="Add to friends"
                icon={<ImagePlus />}
              />
              <Button
                colorScheme={"blue"}
                size={"sm"}
                borderRadius={"full"}
                w={"7rem"}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider borderColor={"gray.600"} />
      </Show>

      {/* Feed */}
      <Box display={"flex"} mt={"20px"} mx={"20px"} my={"20px"}>
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
      <Divider borderColor={"gray.600"} />
      <Box display={"flex"} mx={"20px"} my={"20px"}>
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
      <Divider borderColor={"gray.600"} />
      <Box display={"flex"} mx={"20px"} my={"20px"}>
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
      <Divider borderColor={"gray.600"} />
      {/* End of Feed */}

      {/* Floating Button */}
      <FloatingButton />
    </>
  );
}
