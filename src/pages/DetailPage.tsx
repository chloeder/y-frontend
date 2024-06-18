import { Box, Divider, Heading } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "../components/ui/Skeleton";
import FormReply from "../features/home/components/FormReply";
import RepliesList from "../features/home/components/RepliesList";
import ThreadItem from "../features/home/components/Thread";
import useFetchReplies from "../hooks/useFetchReplies";

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: replies, isPending } = useFetchReplies(id);

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
      <ThreadItem />

      {/* Replies */}
      <Divider borderColor={"gray.600"} />
      <FormReply />

      {isPending ? (
        <Skeleton />
      ) : (
        replies?.map((reply) => {
          return <RepliesList key={reply.id} {...reply} />;
        })
      )}
    </>
  );
}
