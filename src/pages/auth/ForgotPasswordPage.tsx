import { Flex, Image } from "@chakra-ui/react";
import logo from "../../assets/img/Y.png";
import FormForgotPassword from "../../features/auth/components/FormForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <Flex
      m={"10"}
      h={"100vh"}
      flexDirection={{ base: "column", sm: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={{ md: "center", lg: "space-evenly", xl: "space-evenly" }}
      gap={"5rem"}
    >
      <Image
        src={logo}
        alt="logo"
        width={{ base: "3rem", sm: "3ren", md: "12rem" }}
      />

      <FormForgotPassword />
    </Flex>
  );
}
