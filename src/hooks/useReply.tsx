import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ThreadDto } from "../features/home/types/thread.type";
import { threadSchema } from "../features/home/validation/thread.validate";
import { axiosInstance } from "../lib/axios";

export default function useReply(id: string | undefined) {
  const queryClient = useQueryClient();

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ThreadDto>({
    resolver: zodResolver(threadSchema),
    defaultValues: {
      content: "",
      image: "",
    },
  });
  const imgRef = useRef<HTMLInputElement | null>(null);
  const { onChange, ref, ...rest } = register("image");
  const [preview, setPreview] = useState<string | null>(null);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await axiosInstance.post(`/threads/reply/${id}`, data, {
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: () => {
      reset();
      setPreview(null);
      toast.success("Thread created");
      queryClient.invalidateQueries({ queryKey: ["replies", id] });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const onSubmit = (data: ThreadDto) => {
    try {
      const formData = new FormData();

      formData.append("content", data.content);
      if (data.image) {
        formData.append("image", data.image[0]);
      }

      mutateAsync(formData);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    }
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    imgRef,
    onChange,
    ref,
    rest,
    preview,
    setPreview,
    onSubmit,
    isPending,
  };
}
