import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export default function useLikes(id: string | undefined) {
  const query = useQueryClient();

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(`/threads/like/${id}`);
      return response.data;
    },
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["threads"],
      });
      query.invalidateQueries({
        queryKey: ["thread", id],
      });
      query.invalidateQueries({
        queryKey: ["profileThread"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  async function handleLikeThread() {
    await mutateAsync();
  }

  return { handleLikeThread, isPending, error };
}
