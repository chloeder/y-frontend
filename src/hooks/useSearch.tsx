import { useState } from "react";
import { UserSearchEntity } from "../features/search/entities/search.entity";
import { useDebounce } from "use-debounce";
import { axiosInstance } from "../lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function useSearch() {
  const [search, setSearch] = useState<string>("");
  const [debounceSearch] = useDebounce(search, 500);

  const { data, isPending } = useQuery<UserSearchEntity[]>({
    queryKey: ["userSearch", debounceSearch],
    queryFn: async () => {
      if (debounceSearch) {
        const response = await axiosInstance.get(
          `/users?username=${debounceSearch}`
        );

        return response.data.users;
      }
    },
    retry: 1,
  });

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return { data, isPending, handleSearch, search };
}
