import { Outlet } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

function AppLayout() {
  return (
    <div class="bg-[#fafafa]">
      <HeaderMenu />
      <main class="w-[94%] mx-auto my-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
