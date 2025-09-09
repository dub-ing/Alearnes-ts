import { Link } from "react-router-dom";
import Title from "../../ui/Title";
import { useForm } from "react-hook-form";
import { validateEmail } from "../../utilities/helpers";
import FormInput from "../../ui/FormInput";

function SignupForm({ setFormData, formData, setShowForm }) {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;
  function onSubmit(data, event) {
    event.preventDefault();
    setFormData({ ...formData, ...data });
    setShowForm(true);
  }

  return (
    <div class="mt-5 mx-auto px-2 w-100 h-[90vh] flex flex-col">
      <Title>Sign Up</Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="flex flex-col w-full h-full gap-5 mt-6"
      >
        <FormInput label="First Name" error={errors.firstName}>
          <input
            class={`w-full outline-0 bg-[#fafafa] border  border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2 ${
              errors?.firstName
                ? "border-b-red-500"
                : "focus:border-b-purple-deep border-[#f1f1f1]"
            }`}
            type="text"
            id="firstname"
            {...register("firstname", { required: "This field is required" })}
          />
        </FormInput>
        <FormInput label="Last Name" error={errors.lastName}>
          <input
            class={`w-full outline-0 bg-[#fafafa] border  border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2 ${
              errors?.lastName
                ? "border-b-red-500"
                : "focus:border-b-purple-deep border-[#f1f1f1]"
            }`}
            type="text"
            id="lastname"
            {...register("lastname", { required: "This field is required" })}
          />
        </FormInput>
        <FormInput label="Username" error={errors.username}>
          <input
            class={`w-full outline-0 bg-[#fafafa] border  border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2 ${
              errors?.username
                ? "border-b-red-500"
                : "focus:border-b-purple-deep border-[#f1f1f1]"
            }`}
            type="text"
            id="username"
            {...register("username", { required: "This field is required" })}
          />
        </FormInput>
        <FormInput label="Email" error={errors.email}>
          <input
            class={`w-full outline-0 bg-[#fafafa] border  border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2 ${
              errors?.email
                ? "border-b-red-500"
                : "border-[#f1f1f1] focus:border-b-purple-deep"
            }`}
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              validate: (value) =>
                validateEmail.test(value) || "Enter a valid email address",
            })}
          />
        </FormInput>
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

        {/* <div>
          <label htmlFor="firstName">First Name</label>
          <input
            class={`w-full outline-0 bg-[#fafafa] border focus:border-b-purple-deep border-[#f1f1f1] h-10 rounded-lg my-1 py-2 px-2 ${
              errors?.firstName ? "border-b-red-500" : "border-[#f1f1f1]"
            }`}
            type="text"
            id="firstName"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors?.firstName?.message && (
            <div class="text-end">
              <span class="text-xs font-500 text-[#0f0f0f50]">
                {errors.firstName.message}
              </span>
            </div>
          )}
        </div> */}

        <div class="text-center my-3">
          <button
            class="py-3 px-8 text-xs font-700 bg-[#f1f1f1] rounded-lg cursor-pointer"
            type="submit"
          >
            Next
          </button>
        </div>
        <div class="text-center">
          <p class="text-xs font-500">
            Have an account ?{" "}
            <span class="text-purple-deep">
              <Link to="/signin">Log in</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
