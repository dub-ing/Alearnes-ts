import { BsDashLg } from "react-icons/bs";
import {
  completedIcon,
  courseIcon,
  dashboardEclipse,
  knowledgePointsIcon,
  wavingEmoji,
} from "../data";
import { MdAdd } from "react-icons/md";
import CourseIcon from "../ui/CourseIcon";
import ProgressBar from "../ui/ProgressBar";
function DashboardLayout() {
  return (
    <div>
      <div class="py-3 px-6 rounded-lg bg-[#fff] relative">
        <div class="flex items-center gap-6 w-1/2">
          <h1 class="text-lg font-500 text-[#0f0f0f] leading-10">
            Welcome, Amina
          </h1>
          <img src={wavingEmoji} alt="waving emoji" />
        </div>
        <p class="text-sm font-500 text-[#0f0f0f50]">
          What would your like to do today?
        </p>
        <div class="absolute top-0 right-0 my-1.5 mx-2">
          <img src={dashboardEclipse} width={22} alt="icon" />
        </div>
      </div>
      {/* body */}
      <div class="my-6 flex flex-col gap-6">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-3 justify-between">
            <CourseIcon icon={courseIcon} />
            <h3 class="text-xs font-500 leading-10 text-[#0f0f0f]">Courses</h3>
          </div>
          <BsDashLg />
          <div class="flex items-center gap-3">
            <span class="text-2xl font-500 leading-10">4</span>
            <p class="text-xs font-500 text-[#A1A1A1]">Registered</p>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-3 justify-between">
            <CourseIcon icon={completedIcon} />
            <h3 class="text-xs font-500 leading-10 text-[#0f0f0f]">
              Completed Courses
            </h3>
          </div>
          <BsDashLg />
          <div class="flex items-center gap-3">
            <span class="text-2xl font-500 leading-10">1</span>
            <p class="text-xs font-500 text-[#A1A1A1]">Completed</p>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-3 justify-between">
            <CourseIcon icon={knowledgePointsIcon} />
            <h3 class="text-xs font-500 leading-10 text-[#0f0f0f]">
              Knowledge Points
            </h3>
          </div>
          <BsDashLg />
          <div class="flex items-center gap-3">
            <span class="text-2xl font-500 leading-10">4</span>
            <p class="text-xs font-500 text-[#A1A1A1]">Registered</p>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <h1 class="text-sm font-700 leading-10">Course</h1>
        <button class="py-1.5 px-1.5 border border-[#f1f1f1] rounded-sm bg-[#fff]">
          <MdAdd size={15} />
        </button>
      </div>
      {/* courses list */}
      <div class="my-6 flex flex-col gap-4">
        <div class="pt-2 px-2 pb-4 bg-white rounded-lg flex items-start justify-start gap-4">
          <CourseIcon icon={knowledgePointsIcon} />
          <div class="flex flex-col gap-4">
            <label class="text-sm font-600">
              CHM 101:{" "}
              <span class="font-500">Introduction to physical chemistry</span>
            </label>
            <ProgressBar max="100" value="20" />
          </div>
        </div>
        <div class="pt-2 px-2 pb-4 bg-white rounded-lg flex items-start justify-start gap-4">
          <CourseIcon icon={knowledgePointsIcon} />
          <div class="flex flex-col gap-4">
            <label class="text-sm font-600">
              CHM 101:{" "}
              <span class="font-500">Introduction to physical chemistry</span>
            </label>
            <ProgressBar max="100" value="80" />
          </div>
        </div>
        <div class="pt-2 px-2 pb-4 bg-white rounded-lg flex items-start justify-start gap-4">
          <CourseIcon icon={knowledgePointsIcon} />
          <div class="flex flex-col gap-4">
            <label class="text-sm font-600">
              PHS 101:{" "}
              <span class="font-500">Introduction to physical chemistry</span>
            </label>
            <ProgressBar max="100" value="40" />
          </div>
        </div>
        <div class="pt-2 px-2 pb-4 bg-white rounded-lg flex items-start justify-start gap-4">
          <CourseIcon icon={knowledgePointsIcon} />
          <div class="flex flex-col gap-4">
            <label class="text-sm font-600">
              MTS 101:{" "}
              <span class="font-500">Introduction to physical chemistry</span>
            </label>
            <ProgressBar max="100" value="90" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
