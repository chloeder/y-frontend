import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../lib/axios";
import { LoginDto } from "../types/auth.type";
import { loginSchema } from "../validation/auth.validate";

export default function FormLogin() {
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: LoginDto) => {
      const res = await axiosInstance.post("/auth/login", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Login Success");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const onSubmit = (data: LoginDto) => {
    try {
      mutateAsync(data);
      // navigate("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <Box width={{ base: "100%", sm: "100%", md: "50%", lg: "40%", xl: "40%" }}>
      <Box display={"flex"} flexDirection={"column"} gap={"20px"} mb={10}>
        <Heading fontFamily="ChirpExtended" size="md" color="white">
          Login to Y
        </Heading>

        <FormControl isInvalid={!!errors.email}>
          <Input
            type="email"
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
            {...register("email")}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <Input
            type="password"
            borderColor={"gray.600"}
            color="white"
            size="lg"
            borderRadius="lg"
            id="password"
            placeholder="Password"
            _placeholder={{
              opacity: 0.5,
              color: "gray.500",
              fontFamily: "Poppins",
            }}
            {...register("password")}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <Button
          colorScheme="blue"
          borderRadius={"full"}
          onClick={handleSubmit(onSubmit)}
        >
          {isPending ? "Loading..." : "Login"}
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
  );
}
