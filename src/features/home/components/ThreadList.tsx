import {
  Avatar,
  Box,
  Divider,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { Ellipsis, Heart, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import { ThreadProps } from "../types/thread.type";

export default function ThreadList({
  content,
  image,
  users,
  createdAt,
  likes,
  replies,
  id,
}: ThreadProps) {
  return (
    <>
      <Box display={"flex"} mt={"20px"} mx={"20px"} my={"20px"}>
        <Avatar name={users.username} src={users.photoProfile} />
        <Box ml={"10px"} flex={1}>
          <Box
            display={"flex"}
            gap={{ base: "0px", sm: "5px", md: "5px" }}
            flexWrap={"wrap"}
          >
            <Heading size={"sm"}>{users.fullName}</Heading>
            <Text as={"span"} fontSize={"sm"} color={"gray.500"}>
              @{users.username} · {new Date(createdAt).toDateString()}
            </Text>
          </Box>
          <LinkBox>
            <LinkOverlay as={Link} to={`/thread/${id}`}>
              <Text fontSize={"sm"}>{content}</Text>
              <Image src={image} mt={"10px"} borderRadius={"xl"} />
            </LinkOverlay>
          </LinkBox>
          <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
            <Box display={"flex"} alignItems={"center"}>
              <Heart size={20} /> <Text ml={"5px"}>{likes}</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <MessageSquareText size={20} />
              <Text ml={"5px"}>{replies}</Text>
            </Box>
          </Box>
        </Box>
        <Ellipsis size={20} color={"gray"} />
      </Box>
      <Divider borderColor={"gray.600"} />
    </>
  );
}
