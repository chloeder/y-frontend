import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  IconButton,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { ImagePlus } from "lucide-react";

export default function ModalPost({
  size,
  onClose,
  isOpen,
}: {
  size: string;
  onClose: () => void;
  isOpen: boolean;
}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} size={size}>
      <ModalOverlay bg="rgba(29, 161, 242, 0.2)" backdropFilter={"blur(1px)"} />
      <ModalContent bg="black">
        <ModalHeader>
          <Heading size={"md"}>Create Post</Heading>
          <ModalCloseButton />
        </ModalHeader>

        <Box display={"flex"} p={"1rem"}>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box display={"flex"} flexDirection={"column"} width={"100%"}>
            <Textarea
              placeholder="What's on your mind, Dan?"
              size={"md"}
              border={"none"}
              width={"100%"}
              resize={"none"}
              focusBorderColor="none"
            />
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
          />
          <Button
            colorScheme={"blue"}
            size={"sm"}
            borderRadius={"full"}
            w={"7rem"}
          >
            Post
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
}
