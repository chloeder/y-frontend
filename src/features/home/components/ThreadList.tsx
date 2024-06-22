import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  MenuButton,
  MenuList,
  Menu,
  Text,
} from "@chakra-ui/react";
import { Ellipsis, Trash2 } from "lucide-react";
import moment from "moment";
import { Link } from "react-router-dom";
import ThreadFooter from "../../../components/ui/ThreadFooter";
import { ThreadProps } from "../types/thread.type";

export default function ThreadList({
  id,
  content,
  image,
  users,
  createdAt,
  likes,
  replies,
  isLiked,
  onClick,
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
        <Box>
          <Menu>
            <MenuButton>
              <Ellipsis size={20} color={"gray"} />
            </MenuButton>
            <MenuList
              color={"white"}
              bg={"black"}
              boxShadow={"0px 0px 10px rgba(255, 255, 255, 0.4)"}
              border={"none"}
              bgColor={"black"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
            >
              {/* MenuItems are not rendered unless Menu is open */}
              <Button
                color={"red"}
                bg={"none"}
                _hover={{ bg: "none" }}
                onClick={onClick}
              >
                <Trash2 size={17} />
                Delete Thread
              </Button>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Divider borderColor={"gray.600"} />
    </>
  );
}
