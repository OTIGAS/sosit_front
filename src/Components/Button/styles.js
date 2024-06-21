import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: auto;

  padding: 0.5rem;
  font-size: 1rem;

  border: 1px solid;
  background-color: ${({ theme }) => theme.colors.color_02};

  cursor: pointer;

  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.color_04};
  }

  &:disabled {
    opacity: 0.5rem;
    cursor: wait;
  }
`;
