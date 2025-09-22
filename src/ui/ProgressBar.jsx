function ProgressBar({max, value, width, text}) {
    return (
      <div class={`flex items-center gap-2.5 flex-wrap text-center ${width}`}>
        <progress max={max} value={value}></progress>
        {/* <span class="text-xs font-600">{value}%</span> */}
        <p class="text-xs font-600">{text}</p>
      </div>
    );
}

export default ProgressBar
