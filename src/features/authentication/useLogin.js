import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const naviagte = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["Users"], user.user);
      naviagte("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("User email or password are incorrect");
    },
  });
  return { login, isLoading };
}
