import { ButtonContainer } from "./styles";

import PropTypes from "prop-types";

function Button({ children, info, ...props }) {
  return (
    <ButtonContainer {...props} title={info}>
      {children}
    </ButtonContainer>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  info: PropTypes.string,
};

export default Button;
