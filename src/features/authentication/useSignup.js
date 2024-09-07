import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiUser";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useSignup() {
  const clientQuery = useQueryClient();
  const toastId = useRef(null);
  const navigate = useNavigate();
  const {
    mutate: signup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),
    onSuccess: (data) => {
      // console.log(data);
      toast.remove(toastId.current);
      toast.success("Account created successfully");
      clientQuery.setQueryData(["user"], data?.user);
      navigate("/", { replace: true });
    },
    onMutate: () => {
      toastId.current = toast.loading("sign up...");
    },
    onError: (error) => {
      toast.remove(toastId.current);
      toast.error("email already exists");
    },
  });
  return { signup, isLoading, error };
}
