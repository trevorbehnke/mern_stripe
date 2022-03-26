function Button({
  type = "primary",
  size = "md",
  text = "Submit",
  handleClick,
}) {
  return (
    <button onClick={handleClick} className={`btn btn-${type} btn-${size}`}>
      {text}
    </button>
  );
}

export default Button;
