import { SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react";

export default function Skeleton() {
  return (
    <Box my={"20px"} mx={"20px"}>
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
}
