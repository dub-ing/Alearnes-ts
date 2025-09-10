function SpinnerMini() {
  return (
    <div class="text-red bg-green-300" disabled>
      <div
        class="mr-3 size-5 animate-spin bg-red-400"
        viewBox="0 0 24 24"
      ></div>
      Processing…
    </div>
  );
}

export default SpinnerMini;
