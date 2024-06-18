import { Avatar, Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Ellipsis } from "lucide-react";
import { useParams } from "react-router-dom";
import ThreadFooter from "../../../components/ui/ThreadFooter";
import { axiosInstance } from "../../../lib/axios";
import { ThreadEntity } from "../entities/thread.entity";
import moment from "moment";

export default function ThreadItem() {
  const { id } = useParams();

  const thread = useQuery<ThreadEntity>({
    queryKey: ["thread", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/threads/${id}`);
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
          <Text fontSize={"sm"} mt={"10px"}>
            {" "}
            {thread.data?.content}
          </Text>
          <Image src={thread.data?.image} mt={"10px"} borderRadius={"2xl"} />
          <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
            <Text fontSize={"sm"}>
              {moment(thread.data?.createdAt).format("LT")}·{" "}
              {moment(thread.data?.createdAt).format("LL")}
            </Text>
          </Box>
          <Divider borderColor={"gray.600"} my={"10px"} />
          <ThreadFooter
            id={thread.data?.id}
            isLiked={thread.data?.isLiked}
            likes={thread.data?.likes}
            replies={thread.data?.replies}
          />
        </Box>
      </Box>
    </>
  );
}
