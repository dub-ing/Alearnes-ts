import { editPen, profileImg } from "../data";
import { useProfile } from "../features/authentication/useProfile";
import Title from "../ui/Title";

function Profiles() {
  const { profile } = useProfile();
  const { firstname, lastname, level, email, username, courses } =
    profile.user_metadata;
    const completedCourse = courses.length - 1

  return (
    <div>
      <Title>Profile</Title>
      <div class="relative flex items-center gap-6 bg-[#ae35d950] rounded-lg my-6 py-2.5 px-2">
        <img src={editPen} class="absolute top-1 right-1" alt="" />
        <div class="rounded-full bg-[#f1f1f1] h-20 w-20 flex items-center justify-center border-2 border-[#fff]">
          <img src={profileImg} alt="user icon" />
        </div>
        <h3 class="text-2xl text-white font-600 leading-10">{username}</h3>
      </div>
      <div class="">
        <Title>Personal Information</Title>
        <div class="flex flex-col gap-2 items-start my-4">
          <p class="font-600 text-sm text-=[#0f0f0f80]">
            Full Name:{" "}
            <span class="font-500 text-xs leading-5">
              {`${firstname} ${lastname}`}
            </span>
          </p>
          <p class="font-600 text-sm text-=[#0f0f0f80]">
            Email: <span class="font-500 text-xs leading-5">{email}</span>
          </p>
          <p class="font-600 text-sm text-=[#0f0f0f80]">
            Course: <span class="font-500 text-xs leading-5">{courses.join(', ')}</span>
          </p>
          <p class="font-600 text-sm text-=[#0f0f0f80]">
            Level: <span class="font-500 text-xs leading-5">{level}</span>
          </p>
        </div>
      </div>
      <div class="">
        <Title>Personal Information</Title>
        <div class="flex flex-col gap-2 items-start my-4">
          <p class="font-600 text-sm text-=[#0f0f0f80]">
            Course Registered :{" "}
            <span class="font-500 text-xs leading-5">{courses.length}</span>
          </p>
          <p class="font-600 text-sm text-=[#0f0f0f80]">
            Course Completed: <span class="font-500 text-xs leading-5">{completedCourse}</span>
          </p>
          <p class="font-600 text-sm text-=[#0f0f0f80]">
            Strengths:{" "}
            <span class="font-500 text-xs leading-5"></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
