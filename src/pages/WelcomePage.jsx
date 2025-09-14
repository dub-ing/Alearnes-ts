import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";

function WelcomePage() {
  return (
    <div class="w-full">
      <Navbar />
      <div class="h-[92vh] px-4 flex items-center">
        <div class="w-ful frameImg l h-1/2 bg-blue-300 flex flex-col justify-between items-center py-6 text-center">
          <h1 class="text-2xl font-700 leading-10 mt-10 w-2/3 px-5">
            Welcome To Alearners
          </h1>
          <Link to='/dashboard'>
            <button class="bg-purple-deep py-4 px-20 text-sm text-white font-700 rounded-md">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
