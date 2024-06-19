import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { ThreadEntity } from "../features/home/entities/thread.entity";
import { useState } from "react";
import { getThreadEndPoint } from "../utils/thread.endpoint";
import { AxiosError } from "axios";

export default function useFetchTreads() {
  const [threadType, setThreadType] = useState<string>("forYou");

  const END_POINT = getThreadEndPoint(threadType);

  const { data: thread, isPending } = useQuery<ThreadEntity[]>({
    queryKey: ["threads", threadType],
    queryFn: async () => {
      try {
        if (threadType) {
          const response = await axiosInstance.get(`${END_POINT}`);

          return response.data;
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data.message);
        }
      }
    },
  });

  return { thread, isPending, threadType, setThreadType };
}
