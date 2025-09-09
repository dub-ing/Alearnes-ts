function FormInput({ label, children, error }) {
  return (
    <div>
      {label && <label htmlFor={children.props.id}>{label}</label>}

      {children}
      {error && (
        <div class="text-end">
          <span class="text-xs font-500 text-[#0f0f0f50]">{error.message}</span>
        </div>
      )}
    </div>
  );
}

export default FormInput;
