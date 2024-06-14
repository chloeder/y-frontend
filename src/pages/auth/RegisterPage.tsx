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

export default function RegisterPage() {
  return (
    <Flex
      m={"10"}
      h={"100vh"}
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={{ md: "center", lg: "space-evenly", xl: "space-evenly" }}
      gap={"4rem"}
    >
      <Image
        src={logo}
        alt="logo"
        width={{ base: "3rem", sm: "3ren", md: "12rem" }}
      />

      <Box
        width={{ base: "100%", sm: "100%", md: "40%", lg: "40%", xl: "40%" }}
      >
        <Heading fontFamily="ChirpExtended" size="xl" color="white" mb={"3rem"}>
          Join the Trend Now.
        </Heading>
        <Box display={"flex"} flexDirection={"column"} gap={"20px"} mb={"35px"}>
          <Heading fontFamily="ChirpExtended" size="md" color="white">
            Register to Y
          </Heading>
          <FormControl>
            <Input
              borderColor={"gray.600"}
              color="white"
              size="lg"
              borderRadius="lg"
              id="fullName"
              placeholder="Full Name"
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
              id="username"
              placeholder="Username"
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
              <Link to="/login">Login here.</Link>
            </Text>
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
}
