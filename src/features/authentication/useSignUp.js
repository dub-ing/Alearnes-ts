import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useSignup() {
  const navigate = useNavigate();
  const {
    mutate: signup,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ email, password, firstName, lastName }) =>
      signupApi({ email, password, firstName, lastName }),
    onSuccess: (user) => {
      console.log(user);
      toast.success("Account created successfully");
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return {signup, isPending}
}
