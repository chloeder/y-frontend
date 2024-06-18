import { Show } from "@chakra-ui/react";
import FloatingButton from "../components/ui/mobile/FloatingButton";
import Topbar from "../components/ui/navigations/Topbar";
import FormPost from "../features/home/components/FormPost";
import ThreadList from "../features/home/components/ThreadList";
import useFetchTreads from "../hooks/useFetchThreads";
import Skeleton from "../components/ui/Skeleton";

export default function HomePage() {
  const { data: thread, isPending } = useFetchTreads();

  return (
    <>
      {/* TopBar */}
      <Topbar />

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
