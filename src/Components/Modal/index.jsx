import Button from "../Button";
import { CloseButton, ModalBackground, ModalContainer } from "./styles";

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContainer>
        {children}
        <Button type="button" onClick={onClose}>
          Fechar
        </Button>
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
