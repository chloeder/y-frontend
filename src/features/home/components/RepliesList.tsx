import { Avatar, Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";
import { ReplyProps } from "../types/reply.type";

export default function RepliesList({
  content,
  image,
  users,
  createdAt,
}: ReplyProps) {
  return (
    <>
      <Box display={"flex"} mt={"20px"} mx={"20px"} my={"20px"}>
        <Link to={`/profile/${users.username}`}>
          <Avatar name={users.fullName} src={users.photoProfile} />
        </Link>
        <Box ml={"10px"} flex={1}>
          <Box
            display={"flex"}
            gap={{ base: "0px", sm: "5px", md: "5px" }}
            flexWrap={"wrap"}
          >
            <Heading size={"sm"}>{users.fullName}</Heading>
            <Text as={"span"} fontSize={"sm"} color={"gray.500"}>
              @{users.username} · {createdAt}
            </Text>
          </Box>
          <Text fontSize={"sm"}> {content}</Text>
          <Image src={image} mt={"10px"} />
          {/* <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
            <Box display={"flex"} alignItems={"center"}>
              <Heart size={20} /> <Text ml={"5px"}>10</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <MessageSquareText size={20} />
              <Text ml={"5px"}>10</Text>
            </Box>
          </Box> */}
        </Box>
        <Ellipsis size={20} color={"gray"} />
      </Box>
      <Divider borderColor={"gray.600"} />
    </>
  );
}
