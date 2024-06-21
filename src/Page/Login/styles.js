import styled from "styled-components";

export const LoginContainer = styled.form`
  max-width: 720px;
  min-width: 280px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 0.625rem;

  > span {
    cursor: pointer;
    text-align: end;
    text-decoration: underline;

    &:hover {
      font-weight: 800;
    }
  }
`;
