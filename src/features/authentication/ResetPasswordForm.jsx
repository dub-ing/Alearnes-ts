import { useForm } from "react-hook-form";
import { useResetPassword } from "./useResetPassword";
import Title from "../../ui/Title";
import FormInput from "../../ui/FormInput";
import Spinner from "../../ui/Spinner";

function ResetPasswordForm() {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  const { resetPassword, isPending } = useResetPassword();

  function onSubmit(data) {
    const { password } = data;
    resetPassword(password);
  }
  if (isPending) return <Spinner />;
  return (
    <div class="mt-5 mx-auto px-2 w-100 h-[60vh] flex flex-col">
      <Title>Reset Password</Title>
      <form
        class="flex flex-col justify-between h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="flex flex-col w-full gap-4 mt-6">
          <FormInput label="Password" error={errors.confirmPassword}>
            <input
              class={`w-full outline-0 bg-[#fafafa] border border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2 ${
                errors?.confirmPassword
                  ? "border-b-red-500"
                  : "focus:border-b-purple-deep border-[#f1f1f1]"
              }`}
              type="password"
              id="password"
              {...register("password", {
                required: "This field is required",
              })}
            />
          </FormInput>
          <FormInput label="Confirm Password" error={errors.confirmPassword}>
            <input
              class={`w-full outline-0 bg-[#fafafa] border  border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2 ${
                errors?.confirmPassword
                  ? "border-b-red-500"
                  : "focus:border-b-purple-deep border-[#f1f1f1]"
              }`}
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Password does not match",
              })}
            />
          </FormInput>
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

export default ResetPasswordForm;
