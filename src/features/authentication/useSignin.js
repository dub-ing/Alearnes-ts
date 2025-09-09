import { useMutation } from "@tanstack/react-query";
import { signin as signinApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function useSignin() {
  const navigate = useNavigate();
  const { mutate: signin, isPending, error } = useMutation({
    mutationFn: ({ email, password }) => signinApi({ email, password }),
    onSuccess: (data) => {
      console.log(data);
      navigate('/')
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("Provided email or password is incorrect");
    },
  });

  return {signin, isPending, error}
}
