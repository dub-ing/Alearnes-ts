import { useMutation } from "@tanstack/react-query";
import { forgetPassword as forgetPasswordAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useForgetPassword() {
  const {mutate: forgetPassword, isPending, error} = useMutation({
    mutationFn: (email) => forgetPasswordAPI(email),
    onSuccess: (data) => {
        console.log(data);
        toast.success('Reset guide has been sent to your email')
    },
    onError: (error) => {
        console.log(error);
        toast.error(error);
    }
  });


  return {forgetPassword, isPending, error}
}
