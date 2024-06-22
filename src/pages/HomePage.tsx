import { Box, Show, Text } from "@chakra-ui/react";
import FloatingButton from "../components/ui/mobile/FloatingButton";
import Topbar from "../components/ui/navigations/Topbar";
import Skeleton from "../components/ui/Skeleton";
import FormPost from "../features/home/components/FormPost";
import ThreadList from "../features/home/components/ThreadList";
import useFetchTreads from "../hooks/useFetchThreads";

export default function HomePage() {
  const { thread, isPending, threadType, setThreadType, deleteThread } =
    useFetchTreads();

  return (
    <>
      {/* TopBar */}
      <Topbar feedType={threadType} setFeedType={setThreadType} />

      {/* Feed Post */}
      <Show above={"md"}>
        <FormPost />
      </Show>

      {/* Feed */}
      {isPending ? (
        <Skeleton />
      ) : thread?.length ? (
        thread.map((thread) => (
          <ThreadList
            key={thread.id}
            {...thread}
            onClick={() => deleteThread(thread.id)}
          />
        ))
      ) : (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"100vh"}
        >
          <Text size={"md"} fontStyle={"italic"} color={"gray.500"}>
            {threadType === "forYou"
              ? "No post for you"
              : "People didn't post anything yet"}
          </Text>
        </Box>
      )}
      {/* End of Feed */}

      {/* Floating Button */}
      <FloatingButton />
    </>
  );
}
