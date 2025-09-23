import Navbar from "../ui/Navbar";
import SigninForm from "../features/authentication/SigninForm";
import Copyright from "../ui/Copyright";

function SignIn() {
  return (
    <div class="w-full h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <SigninForm />
      </div>
      <Copyright />
    </div>
  );
}

export default SignIn;
