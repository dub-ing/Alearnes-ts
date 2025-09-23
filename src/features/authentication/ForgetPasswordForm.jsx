import { useForm } from "react-hook-form";
import FormInput from "../../ui/FormInput";
import Title from "../../ui/Title";
import { validateEmail } from "../../utilities/helpers";
import { useForgetPassword } from "./useForgetPassword";

function ForgetPasswordForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const {forgetPassword, isPending} = useForgetPassword()

  function onSubmit(data) {
    const {email} = data
    forgetPassword(email)
    
  }
  return (
    <div class="mt-5 mx-auto px-2 w-100 h-[60vh] flex flex-col">
      <Title>Forgot Password</Title>
      <form
        class="flex flex-col w-full h-full gap-4 mt-6 justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            class={`w-full outline-0 bg-[#fafafa] border  border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2 ${
              errors?.email
                ? "border-b-red-500"
                : "focus:border-b-purple-deep border-[#f1f1f1]"
            }`}
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              validate: (value) =>
                validateEmail.test(value) || "Enter a valid email address",
            })}
          />
          <div class="text-end">
            <span class="text-xs font-500 text-red-400">
              {errors?.email?.message}
            </span>
          </div>
          <span class="float-left text-xs text-[#0f0f0f50] font-500">
            Enter registered email
          </span>
        </div>
        <div class="text-center my-3">
          <button
            class="py-3 px-8 text-xs font-700 bg-[#f1f1f1] rounded-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={isPending}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgetPasswordForm;
