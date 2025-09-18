import { Outlet } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

function AppLayout() {
  return (
    <div class="bg-[#fafafa] h-screen grid grid-rows-[64px_minmax(600px,1fr)]">
      <HeaderMenu />
      <main class="w-[94%] mx-auto my-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
