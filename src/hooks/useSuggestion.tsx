import { useQuery } from "@tanstack/react-query";
import { UserSuggestionEntity } from "../features/home/entities/user.entity";
import { axiosInstance } from "../lib/axios";
import { AxiosError } from "axios";

export default function useFetchSuggestion() {
  return useQuery<UserSuggestionEntity[]>({
    queryKey: ["usersSuggested"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/users/suggested");

        return res.data.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data.message);
        }
      }
    },
  });
}
