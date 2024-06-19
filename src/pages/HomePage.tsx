import { Show } from "@chakra-ui/react";
import FloatingButton from "../components/ui/mobile/FloatingButton";
import Topbar from "../components/ui/navigations/Topbar";
import Skeleton from "../components/ui/Skeleton";
import FormPost from "../features/home/components/FormPost";
import ThreadList from "../features/home/components/ThreadList";
import useFetchTreads from "../hooks/useFetchThreads";

export default function HomePage() {
  const { thread, isPending, threadType, setThreadType } = useFetchTreads();

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
      ) : (
        thread?.map((thread) => <ThreadList key={thread.id} {...thread} />)
      )}
      {/* End of Feed */}

      {/* Floating Button */}
      <FloatingButton />
    </>
  );
}
