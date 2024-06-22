import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { ThreadEntity } from "../features/home/entities/thread.entity";
import { useState } from "react";
import { getThreadEndPoint } from "../utils/thread.endpoint";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function useFetchTreads() {
  const queryClient = useQueryClient();

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

  const { mutateAsync } = useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosInstance.delete(`/threads/${id}`);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["threads"] });
      toast.success("Thread deleted");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const deleteThread = (id: string) => {
    mutateAsync(id);
  };

  return { thread, isPending, threadType, setThreadType, deleteThread };
}
