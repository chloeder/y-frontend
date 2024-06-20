import { useState } from "react";
import { getProfileEndPoint } from "../utils/profile.endpoint";
import { useQuery } from "@tanstack/react-query";
import { AuthUser } from "../features/auth/types/auth.type";
import { ThreadEntity } from "../features/home/entities/thread.entity";
import { axiosInstance } from "../lib/axios";
import { AxiosError } from "axios";

export default function useFetchProfileThreads() {
  const [profileType, setProfileType] = useState<string>("posts");
  const { data: authUser } = useQuery<AuthUser>({ queryKey: ["authUser"] });

  const END_POINT = getProfileEndPoint(profileType, authUser?.id);

  const { data: thread, isPending } = useQuery<ThreadEntity[]>({
    queryKey: ["profileThread", profileType],
    queryFn: async () => {
      try {
        if (profileType) {
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

  return { thread, isPending, profileType, setProfileType };
}
