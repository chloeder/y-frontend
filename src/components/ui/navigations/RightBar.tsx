import { Box, Spinner } from "@chakra-ui/react";
import Card from "../cards/Card";
import Suggestion from "../Suggestion";
import useFetchSuggestion from "../../../hooks/useSuggestion";

export default function RightBar() {
  const { data, isPending } = useFetchSuggestion();

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
        {isPending ? (
          <Spinner color="blue.500" alignSelf={"center"} />
        ) : data?.length ? (
          data.map((suggestion) => (
            <Suggestion key={suggestion.id} {...suggestion} />
          ))
        ) : (
          <Box color={"gray.500"} fontStyle={"italic"}>
            No suggestion available
          </Box>
        )}
      </Card>
    </Box>
  );
}
