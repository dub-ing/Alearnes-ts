import ForgetPasswordForm from "../features/authentication/ForgetPasswordForm";
import Copyright from "../ui/Copyright";
import Navbar from "../ui/Navbar";

function ForgetPassword() {
  return (
    <div class="w-full h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <ForgetPasswordForm />
      </div>
      <Copyright />
    </div>
  );
}

export default ForgetPassword;
