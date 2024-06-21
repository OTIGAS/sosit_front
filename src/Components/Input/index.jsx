import { InputContainer } from "./styles";
import PropTypes from "prop-types";

function Input({
  label,
  type,
  required,
  value,
  onChange,
  onBlur,
  error,
  mask,
}) {
  const handleChange = (e) => {
    let newValue = e.target.value;

    if (mask) {
      newValue = mask(newValue);
    }

    onChange({
      ...e,
      target: {
        ...e.target,
        value: newValue,
      },
    });
  };

  return (
    <InputContainer>
      <input
        type={type}
        required={required}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        className={value ? "has-value" : ""}
      />
      <label className={value ? "shrink" : ""}>{label}</label>
      {error && <span>{error}</span>}
    </InputContainer>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  setValue: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  mask: PropTypes.func,
};

export default Input;
