import { TextareaContainer } from "./styles";
import PropTypes from "prop-types";

function Textarea({ info, validate, ...props }) {
  return (
    <TextareaContainer>
      <textarea {...props} title={info} onBlur={validate} />
    </TextareaContainer>
  );
}

Textarea.propTypes = {
  info: PropTypes.string,
  validate: PropTypes.func,
};

export default Textarea;
