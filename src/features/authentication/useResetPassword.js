import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useResetPassword() {
  const navigate = useNavigate();
  const {
    mutate: resetPassword,
    isPending,
    error,
  } = useMutation({
    mutationFn: (password) => resetPasswordAPI(password),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Password reset successful");
      navigate("/signin");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error);
    },
  });

  return { resetPassword, isPending, error };
}
