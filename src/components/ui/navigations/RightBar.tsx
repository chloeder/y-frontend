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
import { CalendarDays } from "lucide-react";
import moment from "moment";
import useFetchSuggestion from "../../../hooks/useSuggestion";
import Card from "../cards/Card";
import ModalProfile from "../modals/ModalProfile";
import Suggestion from "../Suggestion";
import { useQuery } from "@tanstack/react-query";
import useFetchProfile from "../../../hooks/useFetchProfile";
import { AuthUser } from "../../../features/auth/types/auth.type";

export default function RightBar() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data, isPending } = useFetchSuggestion();
  const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });
  const { profile } = useFetchProfile(authUser?.username);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"20px"}
      p={"20px"}
      width={"50%"}
    >
      <Card title="My Profile">
        {isPending ? (
          <Spinner color="blue.500" alignSelf={"center"} />
        ) : (
          <Box position={"relative"} display={"flex"} flexDirection={"column"}>
            <Image
              src={profile?.coverImage}
              alt={"logo"}
              width={"100%"}
              height={"200px"}
              objectFit={"cover"}
            />

            <Box position={"absolute"} top={"150px"} left={"20px"}>
              <Avatar
                boxSize={"100px"}
                border={"2px solid black"}
                name={profile?.username}
                src={profile?.photoProfile}
              />
            </Box>

            <Box display={"flex"} flexDirection={"column"} mb={"10px"}>
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
                size={{
                  base: "full",
                  sm: "full",
                  md: "lg",
                  lg: "xl",
                  xl: "2xl",
                }}
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
      </Card>
      <Card title="Suggestion For You">
        {isPending ? (
          <Spinner color="blue.500" alignSelf={"center"} />
        ) : data?.length ? (
          data.map((suggestion) => (
            <Suggestion key={suggestion.id} {...suggestion} />
          ))
        ) : (
          <Box color={"gray.500"} fontStyle={"italic"}>
            No suggestion available
          </Box>
        )}
      </Card>
    </Box>
  );
}
