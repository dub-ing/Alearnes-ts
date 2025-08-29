import Button from "./Button"
function Tutors() {
    return (
      <div class='py-15 px-14 text-center flex flex-col justify-center'>
        <h3 class='text-[16px] font-raleway font-700 leading-5 text-[#0f0f0f'>Tutors</h3>
        <p class='text-xs font-raleway font-500 leading-5 my-5'>
          Do you have difficulty in any course? We have intelligent tutors who
          will dedicate themselves to helping you pass the course.
        </p>
        <div class='text-white'>
        <Button label="Speak To A Tutor" color="bg-purple-deep" />
        </div>
      </div>
    );
}

export default Tutors
