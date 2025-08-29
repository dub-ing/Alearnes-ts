function InfoCard({info}) {
    const {img, title, text} = info
  return (
    <div class="max-w-[250px] flex flex-col items-center justify-between border-0 rounded-2xl shadow-lg text-center px-8 py-12">
      <div class="w-11 h-11 rounded-full mx-auto mb-4 bg-[#AE35D91A] flex items-center justify-center">
        <img src={img} alt="icon" width={14} />
      </div>
      <h3 class='text-sm font-600 font-raleway my-3 text-[#0f0f0f]'>{title}</h3>
      <p class='text-xs font-600 font-raleway'>{text}</p>
      {/* <p></p> */}
    </div>
  );
}

export default InfoCard;
