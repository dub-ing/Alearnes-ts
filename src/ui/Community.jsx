import { instagramImg, telegramImg, whatsappImg } from "../data";

function Community() {
  return (
    <div class="bg-purple-deep py-10 px-15 flex flex-col items-center text-center">
      <h3 class='text-sm text-white font-raleway font-700'>Learn With our Community</h3>
      <p class='text-xs text-white leading-5 my-3 font-raleway font-500'>
        Join other Alearners in sharing resources, and have brilliant and fun
        discussions.
      </p>
      <div class='flex justify-between items-center w-1/2'>
        <img src={whatsappImg} alt="whatsapp logo icon" />
        <img src={instagramImg} alt="instagram logo icon" />
        <img src={telegramImg} alt="telegram logo icon" />
      </div>
    </div>
  );
}

export default Community;
