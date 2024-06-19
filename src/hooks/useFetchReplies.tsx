import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { ReplyEntity } from "../features/home/entities/reply.entity";
import { AxiosError } from "axios";

export default function useFetchReplies(id: string | undefined) {
  return useQuery<ReplyEntity[]>({
    queryKey: ["replies", id],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/threads/reply/${id}`);

        return response.data.replies;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data.message);
        }
      }
    },
  });
}
