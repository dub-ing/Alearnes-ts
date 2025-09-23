import { useLocation } from "react-router-dom";
import ProgressBar from "./ProgressBar";

function Title({ children }) {
  const { pathname } = useLocation();
  return (
    <div class="flex items-center justify-between">
      <h1 class={`text-3xl ${pathname !== '/signup' ? 'w-full' : 'w-1/2'} font-700 leading-7 text-[#0f0f0f`}>
        {children}
      </h1>
      {pathname === "signup" && (
        <ProgressBar
          max="100"
          value="50"
          width="w-1/2"
          text="This Would take just a minute"
        />
      )}
    </div>
  );
}

export default Title;
