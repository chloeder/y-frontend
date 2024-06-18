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
import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";
import ThreadFooter from "../../../components/ui/ThreadFooter";
import { ThreadProps } from "../types/thread.type";
import moment from "moment";

export default function ThreadList({
  id,
  content,
  image,
  users,
  createdAt,
  likes,
  replies,
  isLiked,
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
              @{users.username} · {moment(createdAt).fromNow()}
            </Text>
          </Box>
          <LinkBox>
            <LinkOverlay as={Link} to={`/thread/${id}`}>
              <Text fontSize={"sm"}>{content}</Text>
              <Image src={image} mt={"10px"} borderRadius={"xl"} />
            </LinkOverlay>
          </LinkBox>
          <ThreadFooter
            id={id}
            likes={likes}
            replies={replies}
            isLiked={isLiked}
          />
        </Box>
        <Ellipsis size={20} color={"gray"} />
      </Box>
      <Divider borderColor={"gray.600"} />
    </>
  );
}
