import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserSettings as updateUserSettingsApi } from "../../services/apiUser";

export function useUpdateUserSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateUserSettings, isLoading } = useMutation({
    mutationFn: ({ firstName, lastName, address }) =>
      updateUserSettingsApi({ firstName, lastName, address }),
    onSuccess: () => {
      queryClient.invalidateQueries("user_settings");
    },
  });
  return { updateUserSettings, isLoading };
}
