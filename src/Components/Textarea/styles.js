import styled from "styled-components";

export const TextareaContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  textarea {
    width: 100%;
    min-height: 7.8125rem;

    padding: 1rem;
    font-size: 1rem;

    border-radius: 0.5rem;
    border: 1px solid #9e9e9e;

    background: none;

    resize: none;
    outline: none;

    &:focus {
      border-color: #3f51b5;
    }

    &::placeholder {
      color: #9e9e9e;
    }
  }
`;
