import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useRef } from "react";
export function useLogin() {
  const toastId = useRef(null);
  const clientQuery = useQueryClient();
  const navigate = useNavigate();
  const {
    data: user,
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onMutate: () => {
      toastId.current = toast.loading("Logging in...");
    },
    onSuccess: (loginData) => {
      console.log(loginData);
      clientQuery.setQueryData(["user"], loginData?.user);
      toast.remove(toastId.current);
      navigate("/", { replace: true });
      toast.success("Logged in successfully");
      clientQuery.invalidateQueries("user");
    },
    onError: (error) => {
      toast.remove(toastId.current);
      toast.error("email or password is incorrect");
    },
  });

  return {
    login,
    isLoading,
    error,
    isAuthnacated: user?.role === "authenticated",
  };
}
