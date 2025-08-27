import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {
  MdBarChart,
  MdOutlineAccessTimeFilled,
  MdOutlineMap,
  MdPerson,
  MdSpaceDashboard,
} from "react-icons/md";
import { logo } from "../data/index";
import Button from "./Button";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu((menu) => !menu)
  }
  return (
    <div>
      <div class="max-sm:hidden w-full py-4 px-9 flex justify-between items-center">
        <img src={logo} alt="Alearners logo" width={125} height={60} />
        <ul class="flex justify-between gap-5 items-center text-white">
          <li class="text-[16px] font-500">
            <a href="#home">Home</a>
          </li>
          <li class="text-[16px] font-500">
            <a href="#community"></a>Community
          </li>
          <li class="text-[16px] font-500">
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <div class='flex gap-4'>
          <Button label="Login" color='text-white' />
          <Button label="Get Started" color='bg-white' />
        </div>
      </div>
      {/* mobile nav menu */}
      <div class="flex justify-between items-center py-4 px-5 sm:hidden">
        <img src={logo} alt="Alearners logo" width={60} />
        <HiOutlineMenu size={24} color="#f1f1f1" onClick={handleMenu} />
      </div>
      {showMenu && (
        <div class="w-[95%] top-0 bottom-0 right-0 bg-purple-deep absolute z-10 px-3.5 py-3.5 flex flex-col gap-6 sm:hidden">
          <div class="flex justify-between items-center">
            <img src={logo} alt="Alearners logo" width={60} />
            <HiOutlineX size={24} color="#f1f1f1" onClick={handleMenu} />
          </div>
          <ul class="w-full flex flex-col justify-between text-white gap-3">
            <a href="" class="w-full flex items-center gap-2 py-3">
              <MdSpaceDashboard size={18} />
              <li class="text-xs">Dashboard</li>
            </a>
            <a href="" class="w-full flex items-center gap-2 py-2">
              <MdBarChart size={18} />
              <li class="text-xs">Leaderboard</li>
            </a>
            <a href="" class="w-full flex items-center gap-2 py-2">
              <MdOutlineAccessTimeFilled size={18} />
              <li class="text-xs">History</li>
            </a>
            <a href="" class="w-full flex items-center gap-2 py-2">
              <MdOutlineMap size={18} />
              <li class="text-xs">Knowledge Map</li>
            </a>
            <a href="" class="w-full flex items-center gap-2 py-2">
              <MdPerson size={18} />
              <li class="text-xs">Profile</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
