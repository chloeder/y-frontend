import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  Heading,
  IconButton,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ImagePlus } from "lucide-react";
import { AuthUser } from "../../../features/auth/types/auth.type";
import usePost from "../../../hooks/usePost";

export default function ModalPost({
  size,
  onClose,
  isOpen,
}: {
  size: string;
  onClose: () => void;
  isOpen: boolean;
}) {
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
  } = usePost();

  return (
    <Modal onClose={onClose} isOpen={isOpen} size={size}>
      <ModalOverlay bg="rgba(29, 161, 242, 0.2)" backdropFilter={"blur(1px)"} />
      <ModalContent bg="black">
        <ModalHeader>
          <Heading size={"md"}>Create Post</Heading>
          <ModalCloseButton />
        </ModalHeader>

        <Box display={"flex"} p={"1rem"}>
          <Avatar name={authUser?.fullName} src={authUser?.photoProfile} />
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
            {preview && (
              <Image src={preview} alt="preview" borderRadius={"lg"} />
            )}
          </Box>
        </Box>

        <Divider borderColor={"gray.600"} />
        <Box
          m={"1rem"}
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
            onClick={() => {
              handleSubmit(onSubmit)();
              onClose();
            }}
          >
            Post
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
}
