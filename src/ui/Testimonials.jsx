import { testimonials } from "../data";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <div class="py-12 flex flex-col items-center relative">
      <h1 class="text-lg font-700 font-raleway mb-4 text-center">
        Comments From Our <span class="text-purple-deep">Students</span>
      </h1>
      <div class="my-10 w-[80%] mx-auto flex flex-wrap justify-center gap-8">
        {testimonials.map((comment, index) => (<TestimonialCard key={index} testimonial={comment}/>))}
      </div>
    </div>
  );
}

export default Testimonials;
