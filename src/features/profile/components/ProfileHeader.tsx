import {
  Avatar,
  Box,
  Button,
  Heading,
  Image,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, CalendarDays } from "lucide-react";
import moment from "moment";
import { Link } from "react-router-dom";
import ModalProfile from "../../../components/ui/modals/ModalProfile";
import { AuthUser } from "../../auth/types/auth.type";
import useFetchProfile from "../../../hooks/useFetchProfile";

export default function ProfileHeader() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });
  const { profile, isPending } = useFetchProfile(authUser?.username);

  return (
    <>
      {/* TopBar */}
      <Box
        position={"sticky"}
        top={"0"}
        bg="rgba(0, 0, 0, 0.5)"
        backdropFilter="auto"
        backdropBlur={"20px"}
        zIndex={10}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          w={"100%"}
          mb={"10px"}
          px={"15px"}
          my={"10px"}
          gap={"20px"}
        >
          <Link to={"/"}>
            <ArrowLeft />
          </Link>
          <Box display={"flex"} flexDirection={"column"}>
            <Heading size={"sm"}>{profile?.fullName}</Heading>
            <Text fontSize={"xs"} color={"gray.400"}>
              @{profile?.username}
            </Text>
          </Box>
        </Box>
      </Box>

      {isPending ? (
        <Spinner color="blue.500" my={"2rem"} alignSelf={"center"} />
      ) : (
        <Box position={"relative"} display={"flex"} flexDirection={"column"}>
          <Image
            src={profile?.coverImage}
            alt={"logo"}
            width={"100%"}
            height={"200px"}
            objectFit={"cover"}
          />

          <Box position={"absolute"} top={"150px"} left={"40px"}>
            <Avatar
              boxSize={"100px"}
              border={"2px solid black"}
              name={profile?.username}
              src={profile?.photoProfile}
            />
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            mx={"20px"}
            mb={"40px"}
          >
            <Button
              width={"110px"}
              size={"sm"}
              border={"1px solid"}
              borderColor={"gray.500"}
              borderRadius={"full"}
              bg={"none"}
              color={"white"}
              alignSelf={"flex-end"}
              mt={"10px"}
              onClick={onOpen}
            >
              Edit Profile
            </Button>

            <ModalProfile
              isOpen={isOpen}
              onClose={onClose}
              size={{ base: "full", sm: "full", md: "lg", lg: "xl", xl: "2xl" }}
            />

            <Box mt={"20px"} mb={"10px"}>
              <Heading size={"md"}>{profile?.fullName}</Heading>
              <Text color={"gray.500"} fontSize={"sm"} mb={"10px"}>
                @{profile?.username}
              </Text>
              <Text>{profile?.bio}</Text>
              <Text
                as={"span"}
                color={"gray.500"}
                fontSize={"sm"}
                mt={"15px"}
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
              >
                <CalendarDays size={"1rem"} color={"gray"} />
                Joined {moment(profile?.createdAt).format("LL")}
              </Text>
            </Box>

            <Box display={"flex"} gap={"20px"}>
              <Text fontSize={"sm"} color={"gray.500"}>
                <Text fontWeight={"bold"} as={"span"} color={"white"}>
                  {profile?.followings}
                </Text>{" "}
                Following
              </Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                <Text fontWeight={"bold"} as={"span"} color={"white"}>
                  {profile?.followers}
                </Text>{" "}
                Followers
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
