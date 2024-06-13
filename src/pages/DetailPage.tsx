import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  IconButton,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  Ellipsis,
  Heart,
  ImagePlus,
  MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function DetailPage() {
  return (
    <>
      <Box
        position={"sticky"}
        top={"0"}
        bg="rgba(0, 0, 0, 0.5)"
        backdropFilter="auto"
        backdropBlur={"20px"}
        zIndex={10}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          w={"100%"}
          mb={"10px"}
          px={"15px"}
          my={"10px"}
          gap={"20px"}
        >
          <Link to={"/"}>
            <ArrowLeft />
          </Link>
          <Box display={"flex"} flexDirection={"column"}>
            <Heading size={"sm"}>Post</Heading>
          </Box>
        </Box>
      </Box>

      {/* Post */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
        mt={"20px"}
        mx={"20px"}
        my={"20px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={{ base: "0px", sm: "5px", md: "5px" }}
          flexWrap={"wrap"}
        >
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />

          <Box ml={"10px"}>
            <Heading size={"md"}>Dan Abrahmov</Heading>
            <Text fontSize={"sm"} color={"gray.500"}>
              @danabramov
            </Text>
          </Box>

          <Box ml={"auto"}>
            <Ellipsis size={20} color={"gray"} />
          </Box>
        </Box>

        <Box>
          <Text fontSize={"sm"}>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam culpa
            corporis omnis quidem at harum eveniet iste, aperiam ipsa quia
            veritatis vel? Officia nobis recusandae commodi. Voluptatum rem
            dolorem minima.
          </Text>
          <Image
            src="https://bit.ly/dan-abramov"
            mt={"10px"}
            borderRadius={"2xl"}
          />
          <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
            <Text fontSize={"sm"}>12:00 AM · Jun 13, 2020</Text>
          </Box>
          <Divider borderColor={"gray.600"} my={"10px"} />
          <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
            <Box display={"flex"} alignItems={"center"}>
              <Heart size={20} /> <Text ml={"5px"}>10</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <MessageSquareText size={20} />
              <Text ml={"5px"}>10</Text>
            </Box>
          </Box>
          <Divider borderColor={"gray.600"} my={"10px"} />
          <Box display={"flex"}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Box display={"flex"} flexDirection={"column"} width={"100%"}>
              <Textarea
                placeholder="Add a comment..."
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
        </Box>
      </Box>
      <Divider borderColor={"gray.600"} />
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
          <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
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
    </>
  );
}
