import { useQuery } from "@tanstack/react-query";
import { getUserSettings } from "../../services/apiUser";

export function useUserSettings() {
  const {
    data: user_settings,
    isLoading,
    error,
  } = useQuery({
    queryFn: getUserSettings,
    queryKey: ["user_settings"],
  });
  return { user_settings, isLoading, error };
}
