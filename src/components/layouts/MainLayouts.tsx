import { Flex, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import BottomBar from "../ui/mobile/BottomBar";
import NavigationBar from "../ui/navigations/NavigationBar";
import RightBar from "../ui/navigations/RightBar";

export default function MainLayout() {
  return (
    <Flex>
      <Show above="md">
        <NavigationBar />
      </Show>

      <Flex
        w={"100%"}
        overflow="auto"
        h="100vh"
        flexDirection={"column"}
        borderLeft={{ md: "1px solid #2c3340" }}
        borderRight={{ lg: "1px solid #2c3340" }}
      >
        <Outlet />
      </Flex>

      <Show above="lg">
        <RightBar />
      </Show>

      <BottomBar />
    </Flex>
  );
}
