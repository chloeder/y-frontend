import { Box } from "@chakra-ui/react";
import Card from "../cards/Card";
import Suggestion from "../Suggestion";

export default function RightBar() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
      p={"20px"}
      width={"50%"}
    >
      <Card>
        <Suggestion />
        <Suggestion />
        <Suggestion />
      </Card>
    </Box>
  );
}
