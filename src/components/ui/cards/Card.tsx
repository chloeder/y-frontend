import { Box, Heading } from "@chakra-ui/react";

export default function Card({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <Box
      border={"1px solid #2c3340"}
      borderRadius={"lg"}
      p={"10px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      width={"100%"}
    >
      <Heading size={"sm"}>{title}</Heading>
      {children}
    </Box>
  );
}
