import {
  callIcon,
  footerLogo,
  instagramIcon,
  telegramIcon,
  whatsappIcon,
} from "../data";

function Footer() {
  return (
    <div class="bg-[#0f0f0f] px-5 py-8 flex flex-col gap-5 justify-between">
      <div class="w-full flex flex-col justify-between">
        <div class="flex w-full justify-between items-end">
          <img src={footerLogo} alt="Alearnsers logo" width={100} height={50} />
          <div class="flex w-1/2 justify-between">
            <img src={instagramIcon} alt="instagram icon" />
            <img src={telegramIcon} alt="telegram icon" />
            <img src={whatsappIcon} alt="whatsapp icon" />
            <img src={callIcon} alt="call icon" />
          </div>
        </div>
        <div class="flex my-8 px-4 justify-between items-center text-center text-white">
          <div class="flex flex-col gap-5">
            <h3 class="text-lg font-700 leading-6">Links</h3>
            <ul class="flex flex-col gap-5">
              <li class='text-sm font-500 leadin-6'>
                <a href="">Home</a>
              </li>
              <li class='text-sm font-500 leadin-6'>
                <a href="">Take a test</a>
              </li>
              <li class='text-sm font-500 leadin-6'>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-5">
            <h3 class="text-lg font-700 leading-6">Support</h3>
            <ul class="flex flex-col gap-5">
              <li class='text-sm font-500 leadin-6'>
                <a href="">FAQs</a>
              </li>
              <li class='text-sm font-500 leadin-6'>
                <a href="">Help Center</a>
              </li>
              <li class='text-sm font-500 leadin-6'>
                <a href="">Community</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-white text-xs text-center font-500">
        <p>Copyright 2025 Alearners. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
