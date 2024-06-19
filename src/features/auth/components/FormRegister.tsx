import toast from "react-hot-toast";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../lib/axios";
import { RegisterDto } from "../types/auth.type";
import { registerSchema } from "../validation/auth.validate";
import { AxiosError } from "axios";

export default function FormRegister() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({
    resolver: zodResolver(registerSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: RegisterDto) => {
      const res = await axiosInstance.post("/auth/register", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Register Success");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const onSubmit = (data: RegisterDto) => {
    try {
      mutateAsync(data);
      navigate("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <Box width={{ base: "100%", sm: "100%", md: "40%", lg: "40%", xl: "40%" }}>
      <Heading fontFamily="Syne" size="xl" color="white" mb={"3rem"}>
        Join the Trend Now.
      </Heading>

      <Box display={"flex"} flexDirection={"column"} gap={"20px"} mb={"35px"}>
        <Heading fontFamily="Syne" size="md" color="white">
          Register to Y
        </Heading>
        <FormControl isInvalid={!!errors.fullName}>
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
            {...register("fullName")}
          />
          <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.username}>
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
            {...register("username")}
          />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
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
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button
          colorScheme="blue"
          borderRadius={"full"}
          onClick={handleSubmit(onSubmit)}
        >
          {isPending ? "Registering..." : "Register"}
        </Button>
      </Box>

      <Box display={"flex"} justifyContent={"center"}>
        <Heading fontFamily="Syne" size="sm" color="white" textAlign={"center"}>
          Already have an account?{" "}
          <Text as={"span"} color="blue.600">
            <Link to="/login">Login here.</Link>
          </Text>
        </Heading>
      </Box>
    </Box>
  );
}
