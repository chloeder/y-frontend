import {
  Avatar,
  Divider,
  Textarea,
  IconButton,
  Button,
  Text,
  Image,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Ellipsis, Heart, MessageSquareText, ImagePlus } from "lucide-react";
import { ThreadEntity } from "../entities/thread.entity";
import { axiosInstance } from "../../../lib/axios";
import { useParams } from "react-router-dom";

export default function ThreadItem() {
  const { id } = useParams();

  const thread = useQuery<ThreadEntity>({
    queryKey: ["thread", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/threads/${id}`, {
        withCredentials: true,
      });
      return res.data;
    },
  });

  return (
    <>
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
          <Avatar
            name={thread.data?.users.username}
            src={thread.data?.users.photoProfile}
          />

          <Box ml={"10px"}>
            <Heading size={"md"}>{thread.data?.users.fullName}</Heading>
            <Text fontSize={"sm"} color={"gray.500"}>
              @{thread.data?.users.username}
            </Text>
          </Box>

          <Box ml={"auto"}>
            <Ellipsis size={20} color={"gray"} />
          </Box>
        </Box>

        <Box>
          <Text fontSize={"sm"}> {thread.data?.content}</Text>
          <Image src={thread.data?.image} mt={"10px"} borderRadius={"2xl"} />
          <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
            <Text fontSize={"sm"}>
              {thread.data?.createdAt.toString()} · Jun 13, 2020
            </Text>
          </Box>
          <Divider borderColor={"gray.600"} my={"10px"} />
          <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
            <Box display={"flex"} alignItems={"center"}>
              <Heart size={20} /> <Text ml={"5px"}>{thread.data?.likes}</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <MessageSquareText size={20} />
              <Text ml={"5px"}>{thread.data?.replies}</Text>
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
    </>
  );
}
