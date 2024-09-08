import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const clientQuery = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Logged out successfully");
      navigate("/");
      clientQuery.invalidateQueries("user");
    },
    onError: () => {
      toast.error("cannot logout");
    },
  });
  return { logout, isLoading };
}
