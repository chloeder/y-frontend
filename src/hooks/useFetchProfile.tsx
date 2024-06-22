import { useQuery } from "@tanstack/react-query";
import { ProfileEntity } from "../features/profile/entities/ProfileEntity";
import { axiosInstance } from "../lib/axios";
import { AxiosError } from "axios";

export default function useFetchProfile(username: string | undefined) {
  const { data: profile, isPending } = useQuery<ProfileEntity>({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`/users/profile/${username}`);

        return response.data.user;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data.message);
        }
      }
    },
  });

  return { profile, isPending };
}
