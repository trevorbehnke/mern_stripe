const Input = ({ label, value, setValue, type = "text" }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{label}</span>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
