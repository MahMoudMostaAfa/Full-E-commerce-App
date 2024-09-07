import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const client = useQueryClient();
  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: ({ password }) => updatePasswordApi({ password }),
    onSuccess: () => {
      client.invalidateQueries("user");
      toast.success("Password updated");
    },
    onError: (error) => {
      toast.error("cannot update password");
    },
  });
  return { updatePassword, isLoading };
}
