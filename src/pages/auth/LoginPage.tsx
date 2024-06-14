import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/img/Y.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Flex
      m={"10"}
      h={"100vh"}
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={{ md: "center", lg: "space-evenly", xl: "space-evenly" }}
      gap={"5rem"}
    >
      <Image
        src={logo}
        alt="logo"
        width={{ base: "3rem", sm: "3ren", md: "12rem" }}
      />

      <Box
        width={{ base: "100%", sm: "100%", md: "50%", lg: "40%", xl: "40%" }}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"20px"} mb={10}>
          <Heading fontFamily="ChirpExtended" size="md" color="white">
            Login to Y
          </Heading>
          <FormControl>
            <Input
              borderColor={"gray.600"}
              color="white"
              size="lg"
              borderRadius="lg"
              id="email"
              placeholder="Email"
              _placeholder={{
                opacity: 0.5,
                color: "gray.500",
                fontFamily: "Poppins",
              }}
            />
            {/* <FormErrorMessage>{errors.email?.message}</FormErrorMessage> */}
          </FormControl>
          <FormControl>
            <Input
              borderColor={"gray.600"}
              color="white"
              size="lg"
              borderRadius="lg"
              id="email"
              placeholder="Password"
              _placeholder={{
                opacity: 0.5,
                color: "gray.500",
                fontFamily: "Poppins",
              }}
            />
            {/* <FormErrorMessage>{errors.email?.message}</FormErrorMessage> */}
          </FormControl>
          <Button colorScheme="blue" borderRadius={"full"}>
            Login
          </Button>
          <Button
            bg={"none"}
            border={"1px"}
            borderColor={"gray.600"}
            borderRadius={"full"}
            color="white"
            _hover={{
              bg: "none",
              color: "blue.600",
            }}
          >
            Forgot Password?
          </Button>
        </Box>

        <Box display={"flex"} justifyContent={"center"}>
          <Heading
            fontFamily="ChirpExtended"
            size="sm"
            color="white"
            textAlign={"center"}
          >
            Already have an account?{" "}
            <Text as={"span"} color="blue.600">
              <Link to="/register">Register here.</Link>
            </Text>
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
}
