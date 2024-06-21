import { SelectElement } from "./styles";
import PropTypes from "prop-types";

const Select = ({ options, value, onChange, label, ...props }) => {
  return (
    <SelectElement
      {...props}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {label ? <option value="">{label}</option> : null}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectElement>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
    })
  ),
  value: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default Select;
