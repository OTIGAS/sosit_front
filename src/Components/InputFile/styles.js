import styled from "styled-components";

export const InputFileWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.8125rem;
`;

export const InputFileContent = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;

  text-align: center;
  border-radius: 0.25rem;

  cursor: pointer;
  transition: background-color 0.3s;

  color: ${({ theme }) => theme.colors.color_11};
  background-color: ${({ theme }) => theme.colors.primary_02};
  &:hover {
    background-color: #00875f; /* Cor de fundo ao passar o mouse */
  }
`;
