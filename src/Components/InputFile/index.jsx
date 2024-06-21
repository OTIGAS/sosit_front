import { FileLabel, InputFileContent, InputFileWrapper } from "./styles";

import PropTypes from "prop-types";

function InputFile({ children, info, id, htmlFor, type, accept, onChange }) {
  return (
    <InputFileWrapper>
      <InputFileContent
        id={id}
        type={type}
        accept={accept}
        onChange={onChange}
      />
      <FileLabel htmlFor={htmlFor}>{children}</FileLabel>
    </InputFileWrapper>
  );
}

InputFile.propTypes = {
  children: PropTypes.node.isRequired,
  info: PropTypes.string,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  type: PropTypes.string,
  accept: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputFile;
