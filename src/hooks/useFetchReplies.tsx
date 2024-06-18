import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { ReplyEntity } from "../features/home/entities/reply.entity";

export default function useFetchReplies(id: string | undefined) {
  return useQuery<ReplyEntity[]>({
    queryKey: ["replies", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/threads/reply/${id}`, {
        withCredentials: true,
      });

      return response.data.replies;
    },
  });
}
