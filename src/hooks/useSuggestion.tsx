import { useQuery } from "@tanstack/react-query";
import { UserSuggestionEntity } from "../features/home/entities/user.entity";
import { axiosInstance } from "../lib/axios";

export default function useFetchSuggestion() {
  return useQuery<UserSuggestionEntity[]>({
    queryKey: ["usersSuggested"],
    queryFn: async () => {
      const res = await axiosInstance.get("/users/suggested");

      return res.data.data;
    },
  });
}
