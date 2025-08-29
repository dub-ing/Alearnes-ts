import { aboutImg, infographics } from "../data";
import InfoCard from "./InfoCard";

function AboutUs() {
  return (
    <div class="py-12 flex flex-col items-center relative">
      <div class="text-center">
        <h1 class="text-[16px] font-700 font-raleway mb-4">About Us</h1>
        <p class="text-xs font-raleway font-500 max-w-[300px] mx-auto">
          Alearners is an academic platform providing resources that improves
          the academic excellence of students in tertiary institutions across
          Africa.
        </p>
      </div>
      <img src={aboutImg} alt="screenshot of website" class="w-full" />
      <div class="my-10 w-[80%] mx-auto flex flex-wrap justify-center gap-8">
        {infographics.map((infographics, index) => (
          <InfoCard key={index} info={infographics} />
        ))}
      </div>
      <div class="absolute w-5 h-9 rounded-b-sm bg-purple-light top-0 left-9"></div>
    </div>
  );
}

export default AboutUs;
