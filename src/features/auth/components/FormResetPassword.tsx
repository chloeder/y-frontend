import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../../lib/axios";
import { ResetPasswordDto } from "../types/auth.type";
import { resetPasswordSchema } from "../validation/auth.validate";

export default function FormResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordDto>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: ResetPasswordDto) => {
      const res = await axiosInstance.post(
        `/auth/reset-password/${token}`,
        data
      );
      return res.data;
    },
    onSuccess: () => {
      // refetch the authUser
      toast.success("Reset password Success");
      navigate("/login");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const onSubmit = (data: ResetPasswordDto) => {
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
        <Heading fontFamily="Syne" size="md" color="white">
          Reset Password
        </Heading>

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
        <FormControl isInvalid={!!errors.confirmPassword}>
          <Input
            type="password"
            borderColor={"gray.600"}
            color="white"
            size="lg"
            borderRadius="lg"
            id="confirmPassword"
            placeholder="Confirm Password"
            _placeholder={{
              opacity: 0.5,
              color: "gray.500",
              fontFamily: "Poppins",
            }}
            {...register("confirmPassword")}
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isPending}
          colorScheme="blue"
          borderRadius={"full"}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
