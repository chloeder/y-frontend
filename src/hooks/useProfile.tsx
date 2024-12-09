import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ProfileDto } from "../features/profile/types/profile.dto";
import { profileSchema } from "../features/profile/validations/profile.validate";
import { axiosInstance } from "../lib/axios";

export default function useProfile() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileDto>({
    resolver: zodResolver(profileSchema),
  });

  const {
    onChange: photoProfileOnChange,
    ref: photoProfileRef,
    ...photoProfileRest
  } = register("photoProfile");
  const photoRef = useRef<HTMLInputElement | null>(null);
  const coverRef = useRef<HTMLInputElement | null>(null);
  const {
    onChange: coverImageOnChange,
    ref: coverImageRef,
    ...coverImageRest
  } = register("coverImage");
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);
  const [previewCover, setPreviewCover] = useState<string | null>(null);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        const res = await axiosInstance.patch(`/users/profile/update`, data);
        return res.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw error.response?.data.message;
        }
      }
    },
    onSuccess: () => {
      setPreviewPhoto(null);
      setPreviewCover(null);
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Profile updated");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const onSubmit = (data: ProfileDto) => {
    try {
      const formData = new FormData();

      formData.append("fullName", data.fullName);
      formData.append("username", data.username);
      formData.append("bio", data.bio);
      if (data.realName) {
        formData.append("realName", data.realName);
      }
      if (data.bornDate) {
        formData.append("bornDate", data.bornDate.toString());
      }
      if (data.address) {
        formData.append("address", data.address);
      }

      if (data.photoProfile) {
        formData.append("photoProfile", data.photoProfile[0]);
      }
      if (data.coverImage) {
        formData.append("coverImage", data.coverImage[0]);
      }

      mutateAsync(formData);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    }
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    photoRef,
    coverRef,
    photoProfileOnChange,
    photoProfileRef,
    photoProfileRest,
    coverImageOnChange,
    coverImageRef,
    coverImageRest,
    previewPhoto,
    setPreviewPhoto,
    previewCover,
    setPreviewCover,
    isPending,
  };
}
