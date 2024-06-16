import {
  Avatar,
  Divider,
  Image,
  Text,
  Box,
  Heading,
  SkeletonCircle,
  SkeletonText,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Heart, MessageSquareText, Ellipsis } from "lucide-react";
import { axiosInstance } from "../../../lib/axios";
import { ThreadEntity } from "../entities/thread.entity";
import { Link } from "react-router-dom";

export default function ThreadList() {
  const { data, isPending } = useQuery<ThreadEntity[]>({
    queryKey: ["threads"],
    queryFn: async () => {
      const res = await axiosInstance.get("/threads", {
        withCredentials: true,
      });
      return res.data;
    },
  });

  return (
    <>
      {isPending && (
        <Box my={"20px"} mx={"20px"}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      )}
      {data &&
        data.map((thread) => (
          <>
            <Box display={"flex"} mt={"20px"} mx={"20px"} my={"20px"}>
              <Avatar
                name={thread.users.username}
                src={thread.users.photoProfile}
              />
              <Box ml={"10px"} flex={1}>
                <Box
                  display={"flex"}
                  gap={{ base: "0px", sm: "5px", md: "5px" }}
                  flexWrap={"wrap"}
                >
                  <Heading size={"sm"}>{thread.users.fullName}</Heading>
                  <Text as={"span"} fontSize={"sm"} color={"gray.500"}>
                    @{thread.users.username} ·{" "}
                    {new Date(thread.createdAt).toDateString()}
                  </Text>
                </Box>
                <LinkBox>
                  <LinkOverlay as={Link} to={`/thread/${thread.id}`}>
                    <Text fontSize={"sm"}>{thread.content}</Text>
                    <Image src={thread.image} mt={"10px"} borderRadius={"xl"} />
                  </LinkOverlay>
                </LinkBox>
                <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <Heart size={20} /> <Text ml={"5px"}>{thread.likes}</Text>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <MessageSquareText size={20} />
                    <Text ml={"5px"}>{thread.replies}</Text>
                  </Box>
                </Box>
              </Box>
              <Ellipsis size={20} color={"gray"} />
            </Box>
            <Divider borderColor={"gray.600"} />
          </>
        ))}
    </>
  );
}
