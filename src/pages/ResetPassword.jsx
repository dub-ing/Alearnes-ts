import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import Copyright from "../ui/Copyright";
import Navbar from "../ui/Navbar";

function ResetPassword() {
    return (
      <div class="w-full h-screen flex flex-col justify-between">
        <div>
          <Navbar />
          <ResetPasswordForm />
        </div>
        <Copyright />
      </div>
    );
}

export default ResetPassword
