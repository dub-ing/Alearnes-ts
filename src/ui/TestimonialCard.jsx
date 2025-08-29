import { HiOutlineStar } from "react-icons/hi";

function TestimonialCard({testimonial}) {
    const {img, name, comment, rating} = testimonial
    return (
      <div class="max-w-[250px] flex flex-col items-center justify-between  text-center px-8 py-12 gap-3">
          <img
            src={img}
            alt="icon"
            class="w-10 h-10 rounded-full mx-auto bg-[#AE35D91A] flex items-center justify-center"
          />
        <h3 class="text-sm font-600 font-raleway text-[#0f0f0f]">
          {name}
        </h3>
        <div class='flex justify-center gap-1 text-purple-deep'>
            {Array.from({length: rating}, (item, index)=> (<HiOutlineStar key={index} />))}
        </div>
        <p class="text-xs font-600 font-raleway">{comment}</p>
        
      </div>
    );
}

export default TestimonialCard
