import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Hero() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/signup')
  }
    return (
      <div class="py-18 px-4 flex flex-col items-center text-center font-raleway relative">
        <div class="relative w-full md:max-w-[50%]">
          <h3 class="text-4xl max-w-[80%] mx-auto font-900 text-white leading-10">
            Learning Made Easy And Fun!
          </h3>
          <div class="w-2.5 h-12 absolute top-[-30%] right-[25px] rounded-xs bg-yellow"></div>
          <div class="w-2.5 h-12 absolute top-[9%] right-[10px] rounded-xs bg-purple-light"></div>
        </div>
        <p class="text-xs text-white font-600 max-w-[260px] md:max-w-[48%] my-5">
          Increase the chances of getting an A in your courses. Having a better
          CGPA and achieving it like it"s nothing
        </p>
        <Button color='bg-white' label='Get Started' onClick={handleClick} />
        <div class='absolute w-5 h-9 rounded-t-sm bg-yellow bottom-0 left-4'></div>
      </div>
    );
}

export default Hero
