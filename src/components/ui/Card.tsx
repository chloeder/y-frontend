import { Box, Heading } from "@chakra-ui/react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <Box
      border={"1px solid #2c3340"}
      borderRadius={"lg"}
      p={"10px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      <Heading size={"sm"}>Suggestion For You</Heading>
      {children}
    </Box>
  );
}
