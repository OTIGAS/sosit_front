import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 100;
`;

export const ModalContainer = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 0.625rem;

  position: relative;
  padding: 1.25rem;

  background-color: ${({ theme }) => theme.colors.color_03};

  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  text-align: center;
  font-size: 1.875rem;
  border: none;

  background: none;

  cursor: pointer;
`;
