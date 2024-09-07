import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Logged out successfully");
      navigate("/");
    },
    onError: () => {
      toast.error("cannot logout");
    },
  });
  return { logout, isLoading };
}
