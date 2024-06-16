import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  IconButton,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { DevTool } from "@hookform/devtools";
// import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ThreadDto } from "../types/thread.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { threadSchema } from "../validation/thread.validate";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreatePost() {
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
      const res = await axiosInstance.post("/threads", data, {
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: () => {
      reset();
      setPreview(null);
      toast.success("Thread created");
      queryClient.invalidateQueries({ queryKey: ["threads"] });
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

  return (
    <>
      <Box display={"flex"} my={"20px"} mx={"20px"}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Box display={"flex"} flexDirection={"column"} width={"100%"}>
          <FormControl isInvalid={!!errors.content}>
            <Textarea
              placeholder="What's on your mind, Dan?"
              size={"md"}
              border={"none"}
              width={"100%"}
              resize={"none"}
              focusBorderColor="none"
              {...register("content")}
            />
            <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
          </FormControl>
          {preview && <Image src={preview} alt="preview" borderRadius={"lg"} />}
          <Divider borderColor={"gray.600"} my={"1rem"} />
          <Box
            mx={"1rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              variant={"unstyled"}
              color={"blue.500"}
              aria-label="Add to friends"
              icon={<ImagePlus />}
              onClick={() => imgRef.current?.click()}
            />
            <Input
              accept="image/*"
              type="file"
              hidden
              {...rest}
              ref={(e) => {
                ref(e);
                imgRef.current = e;
              }}
              onChange={(e) => {
                onChange(e);
                const file = e.target.files![0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setPreview(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <Button
              isLoading={isPending}
              colorScheme={"blue"}
              size={"sm"}
              borderRadius={"full"}
              w={"7rem"}
              onClick={handleSubmit(onSubmit)}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider borderColor={"gray.600"} />
      <DevTool control={control} />
    </>
  );
}
