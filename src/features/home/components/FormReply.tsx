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
// import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { ImagePlus } from "lucide-react";
import { useParams } from "react-router-dom";
import useReply from "../../../hooks/useReply";
import { AuthUser } from "../../auth/types/auth.type";

export default function FormReply() {
  const { id } = useParams();
  const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });
  const {
    register,
    handleSubmit,
    errors,
    imgRef,
    onChange,
    ref,
    rest,
    preview,
    setPreview,
    onSubmit,
    isPending,
  } = useReply(id);

  return (
    <>
      <Box display={"flex"} my={"20px"} mx={"20px"}>
        <Avatar name={authUser?.fullName} src={authUser?.photoProfile} />
        <Box display={"flex"} flexDirection={"column"} width={"100%"}>
          <FormControl isInvalid={!!errors.content}>
            <Textarea
              placeholder={`What's on your mind, ${authUser?.fullName.slice(
                0,
                4
              )}?`}
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
    </>
  );
}
