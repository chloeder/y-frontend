import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
import { Camera } from "lucide-react";
import { ProfileEntity } from "../../../features/profile/entities/ProfileEntity";
import useProfile from "../../../hooks/useProfile";

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
  const {
    onSubmit,
    register,
    handleSubmit,
    errors,
    photoRef,
    photoProfileOnChange,
    photoProfileRef,
    photoProfileRest,
    previewPhoto,
    setPreviewPhoto,
    coverRef,
    coverImageOnChange,
    coverImageRef,
    coverImageRest,
    previewCover,
    setPreviewCover,
    isPending,
  } = useProfile();
  // const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });
  const { data: profile } = useQuery<ProfileEntity>({ queryKey: ["profile"] });

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
            src={previewCover ? previewCover : profile?.coverImage}
            alt={"logo"}
            width={"100%"}
            height={"200px"}
            objectFit={"cover"}
          />
          <IconButton
            position={"absolute"}
            top={"80px"}
            left={"320px"}
            isRound={true}
            background={"rgba(0, 0, 0, 0.5)"}
            aria-label="upload profile picture"
            fontSize="20px"
            icon={<Camera color={"white"} />}
            onClick={() => coverRef.current?.click()}
          />
          <Input
            accept="image/*"
            type="file"
            hidden
            {...coverImageRest}
            ref={(e) => {
              coverImageRef(e);
              coverRef.current = e;
            }}
            onChange={(e) => {
              coverImageOnChange(e);
              const file = e.target.files![0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  setPreviewCover(reader.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
          />

          <Box position={"absolute"} top={"135px"} left={"40px"}>
            <Avatar
              position={"relative"}
              boxSize={"130px"}
              border={"3px solid black"}
              name={profile?.username}
              src={previewPhoto ? previewPhoto : profile?.photoProfile}
            />
            <IconButton
              position={"absolute"}
              top={"45px"}
              left={"45px"}
              isRound={true}
              background={"rgba(0, 0, 0, 0.5)"}
              aria-label="upload profile picture"
              fontSize="20px"
              icon={<Camera color={"white"} />}
              onClick={() => photoRef.current?.click()}
            />
            <Input
              accept="image/*"
              type="file"
              hidden
              {...photoProfileRest}
              ref={(e) => {
                photoProfileRef(e);
                photoRef.current = e;
              }}
              onChange={(e) => {
                photoProfileOnChange(e);
                const file = e.target.files![0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setPreviewPhoto(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </Box>

          <Box
            mt={"70px"}
            display={"flex"}
            flexDirection={"column"}
            width={"100%"}
            p={"1rem"}
            gap={"20px"}
          >
            <FormControl isInvalid={!!errors.realName}>
              <FormLabel>Real Name</FormLabel>
              <Input
                placeholder={profile?.realName && profile?.realName}
                _placeholder={{ fontSize: "12px" }}
                borderColor={"gray.600"}
                defaultValue={profile?.realName}
                {...register("realName")}
              />
              <FormErrorMessage>{errors.realName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.fullName}>
              <FormLabel>Full Name</FormLabel>
              <Input
                placeholder={profile?.fullName && profile?.fullName}
                _placeholder={{ fontSize: "12px" }}
                borderColor={"gray.600"}
                defaultValue={profile?.fullName}
                {...register("fullName")}
              />
              <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder={profile?.username && profile?.username}
                _placeholder={{
                  fontSize: "12px",
                }}
                borderColor={"gray.600"}
                defaultValue={profile?.username}
                {...register("username")}
              />{" "}
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.bornDate}>
              <FormLabel>Born Date</FormLabel>
              <Input
                type="date"
                placeholder={profile?.bornDate && profile?.bornDate}
                _placeholder={{ fontSize: "12px" }}
                borderColor={"gray.600"}
                defaultValue={profile?.bornDate}
                {...register("bornDate")}
              />
              <FormErrorMessage>{errors.bornDate?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.bio}>
              <FormLabel>Bio</FormLabel>
              <Textarea
                placeholder={profile?.bio && profile?.bio}
                _placeholder={{ fontSize: "12px" }}
                borderColor={"gray.600"}
                defaultValue={profile?.bio}
                {...register("bio")}
              />
              <FormErrorMessage>{errors.bio?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.address}>
              <FormLabel>Address</FormLabel>
              <Textarea
                placeholder={profile?.address && profile?.address}
                _placeholder={{ fontSize: "12px" }}
                borderColor={"gray.600"}
                defaultValue={profile?.address}
                {...register("address")}
              />
              <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
            </FormControl>
          </Box>
          <Divider borderColor={"gray.600"} />
          <Button
            isLoading={isPending}
            width={"30%"}
            m={"20px"}
            borderRadius={"full"}
            ml={"auto"}
            colorScheme={"blue"}
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
}
