function Button({ color, label, onClick }) {
  return (
    <button onClick={onClick}
      class={`${color} text-[10px] font-raleway font-700 py-3 px-4 rounded-sm border-0 mt-2 md:text-lg md:font-500`}
    >
      {label}
    </button>
  );
}

export default Button;
