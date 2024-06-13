import { IconButton, Show, useDisclosure } from "@chakra-ui/react";
import { CircleFadingPlus } from "lucide-react";
import ModalPost from "../modals/ModalPost";

export default function FloatingButton() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Show below="md">
      <IconButton
        borderRadius={"full"}
        position={"fixed"}
        zIndex={10}
        bottom={"80px"}
        right={"20px"}
        colorScheme="blue"
        aria-label="Call Segun"
        boxSize={"60px"}
        icon={<CircleFadingPlus />}
        onClick={onOpen}
      />

      <ModalPost isOpen={isOpen} onClose={onClose} size={"full"} />
    </Show>
  );
}
