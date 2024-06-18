import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { ThreadEntity } from "../features/home/entities/thread.entity";

export default function useFetchTreads() {
  return useQuery<ThreadEntity[]>({
    queryKey: ["threads"],
    queryFn: async () => {
      const res = await axiosInstance.get("/threads", {
        withCredentials: true,
      });
      return res.data;
    },
  });
}
