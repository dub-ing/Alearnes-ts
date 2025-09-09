import { useState } from "react";
import { signin } from "../../services/apiAuth";
import { useSignin } from "./useSignin";
import Title from "../../ui/Title";

function SigninForm() {
  const [email, setEmail] = useState("mrKrabs");
  const [password, setPassword] = useState("krabs007");
  const { signin, isPending: isLoading, error } = useSignin();

  function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) return;
    signin({ email, password });
    console.log(email, password);
  }

  return (
    <div class="mt-5 mx-auto px-2 w-100 h-[60vh] flex flex-col">
      <Title>Sign In</Title>
      <form action="" class="my-3 flex flex-col justify-between h-full">
        <div>
          <div class="w-full my-6">
            <label htmlFor="email" class="text-sm font-500 leading-5">
              Email/Username
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              disabled={isLoading}
              class={`w-full outline-0 border focus:border-b-purple-deep ${
                error ? "border-red-500" : "border-[#f1f1f1]"
              } h-10 rounded-lg my-1 py-2 px-2`}
            />
          </div>
          <div class="w-full my-6">
            <label htmlFor="password" class="text-sm font-500 leading-5">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              disabled={isLoading}
              class={`w-full outline-0 border focus:border-b-purple-deep ${
                error ? "border-red-500" : "border-[#f1f1f1]"
              } h-10 rounded-lg my-1 py-2 px-2`}
            />
          </div>
          <span class="float-right text-xs text-purple-deep font-500">
            Forgot Password ?
          </span>
        </div>
        <div class="text-center">
          <button
            class="py-3 px-8 text-xs font-700 bg-[#f1f1f1] rounded-lg cursor-pointer disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Loggin In" : "Log in"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
