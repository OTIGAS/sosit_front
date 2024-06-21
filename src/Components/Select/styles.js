import styled from "styled-components";

export const SelectElement = styled.select`
  width: 100%;
  padding: 0.625rem;

  font-size: 1rem;

  border-radius: 0.5rem;
  border: solid 1px #9e9e9e;

  background: none;

  option {
    background-color: ${({ theme }) => theme.colors.color_01};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
