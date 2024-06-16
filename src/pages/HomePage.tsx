import { Show } from "@chakra-ui/react";
import FloatingButton from "../components/ui/mobile/FloatingButton";
import Topbar from "../components/ui/navigations/Topbar";
import CreatePost from "../features/home/components/CreatePost";
import ThreadList from "../features/home/components/ThreadList";

export default function HomePage() {
  return (
    <>
      {/* TopBar */}
      <Topbar />

      {/* Feed Post */}
      <Show above={"md"}>
        <CreatePost />
      </Show>

      {/* Feed */}
      <ThreadList />
      {/* End of Feed */}

      {/* Floating Button */}
      <FloatingButton />
    </>
  );
}
