import {
  Avatar,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function ModalProfile({
  size,
  onClose,
  isOpen,
}: {
  size: {
    base: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  onClose: () => void;
  isOpen: boolean;
}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} size={size} isCentered>
      <ModalOverlay bg="rgba(29, 161, 242, 0.2)" backdropFilter={"blur(1px)"} />
      <ModalContent bg="black">
        <ModalHeader display={"flex"}>
          <ModalCloseButton />
          <Heading size={"md"}>Edit Profile</Heading>
        </ModalHeader>

        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          h={"100%"}
        >
          <Image
            src={"https://i.imgur.com/8HcT3E5.png"}
            alt={"logo"}
            width={"100%"}
            height={"200px"}
          />

          <Box position={"absolute"} top={"150px"} left={"40px"}>
            <Avatar boxSize={"100px"} border={"2px solid black"} />
          </Box>

          <Box
            mt={"70px"}
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            p={"1rem"}
            gap={"20px"}
          >
            <Input
              placeholder="Enter your name"
              _placeholder={{ fontSize: "12px" }}
              borderColor={"gray.600"}
            />
            <Input
              placeholder="Enter your username"
              _placeholder={{
                fontSize: "12px",
              }}
              borderColor={"gray.600"}
            />
            <Input
              placeholder="Enter your bio"
              _placeholder={{ fontSize: "12px" }}
              borderColor={"gray.600"}
            />
          </Box>
          <Divider borderColor={"gray.600"} />
          <Button
            width={"30%"}
            m={"20px"}
            borderRadius={"full"}
            ml={"auto"}
            colorScheme={"blue"}
          >
            Save
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
}
