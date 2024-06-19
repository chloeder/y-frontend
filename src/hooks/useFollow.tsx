import { useQueryClient, useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";

export default function useFollow(id: string | undefined) {
  const query = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(`/users/follow/${id}`);

      return response.data;
    },
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["follow"],
      });
      query.invalidateQueries({
        queryKey: ["userSearch"],
      });
      query.invalidateQueries({
        queryKey: ["usersSuggested"],
      });
    },
  });

  async function onFollow() {
    await mutateAsync();
  }

  return { onFollow, isPending };
}
