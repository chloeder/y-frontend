import { Box, Text } from "@chakra-ui/react";
import { Heart, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";
import useLike from "../../hooks/useLike";

export default function ThreadFooter({
  id,
  likes,
  replies,
  isLiked,
}: {
  id: string | undefined;
  likes: number | undefined;
  replies: number | undefined;
  isLiked: boolean | undefined;
}) {
  const { handleLikeThread } = useLike(id);

  return (
    <Box display={"flex"} mt={"10px"} gap={"2rem"} color={"gray"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        cursor={"pointer"}
        onClick={handleLikeThread}
      >
        {isLiked ? (
          <Heart color="red" fill="red" size={20} />
        ) : (
          <Heart size={20} />
        )}
        <Text ml={"5px"}>{likes}</Text>
      </Box>
      <Link to={`/thread/${id}`}>
        <Box display={"flex"} alignItems={"center"}>
          <MessageSquareText size={20} />
          <Text ml={"5px"}>{replies}</Text>
        </Box>
      </Link>
    </Box>
  );
}
