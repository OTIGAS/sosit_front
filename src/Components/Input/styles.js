import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;

  width: 100%;

  input {
    width: 100%;
    height: auto;

    padding: 0.6875rem;
    font-size: 1rem;

    border-radius: 0.5rem;
    border: solid 1px #9e9e9e;

    background: none;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &.has-value {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.primary_03};
    }

    &:focus ~ label,
    &.has-value ~ label {
      padding: 0 0.2rem;
      background-color: ${({ theme }) => theme.colors.color_01};
      transform: translateY(-50%) scale(0.8);
    }
  }

  label {
    font-size: 1rem;
    position: absolute;
    left: 1rem;
    pointer-events: none;
    transform: translateY(0.75rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  span {
    color: #f31;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;
