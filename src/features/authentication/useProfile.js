import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useProfile() {
  const { isLoading, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    profile,
    isAuthenticated: profile?.role === "authenticated",
  };
}
