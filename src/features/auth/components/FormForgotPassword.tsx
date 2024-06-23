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
import { ForgotPasswordDto } from "../types/auth.type";
import { forgotPasswordSchema } from "../validation/auth.validate";

export default function FormForgotPassword() {
  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordDto>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: ForgotPasswordDto) => {
      const res = await axiosInstance.post("/auth/forgot-password", data);
      return res.data;
    },
    onSuccess: () => {
      // refetch the authUser
      toast.success("Please check your email to reset password");
      resetField("email");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const onSubmit = (data: ForgotPasswordDto) => {
    try {
      mutateAsync(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    }
  };

  return (
    <Box width={{ base: "100%", sm: "100%", md: "50%", lg: "40%", xl: "40%" }}>
      <Box display={"flex"} flexDirection={"column"} gap={"20px"} mb={10}>
        <Heading fontFamily="Syne" size="md" color="white">
          Forgot Password
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
        <Button
          isLoading={isPending}
          colorScheme="blue"
          borderRadius={"full"}
          onClick={handleSubmit(onSubmit)}
        >
          Send
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
