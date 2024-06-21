import styled from "styled-components";

export const RegisterContainer = styled.div`
  max-width: 720px;
  min-width: 280px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 0.625rem;

  > div {
    width: 100%;
    height: 65%;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 1.25rem;
  }
`;

export const Container = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  gap: 1.25rem;

  > div {
    height: 100%;
  }

  > div:nth-child(2) {
    height: 67.5%;
  }
`;

export const SubContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  padding: 1.25rem 0.625rem 0.625rem 0.625rem;

  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem;

  position: relative;

  h1 {
    font-size: 1.5rem;

    position: absolute;
    top: -1.1rem;
    left: 0.625rem;

    background-color: ${({ theme }) => theme.colors.color_01};
  }
`;

export const PreRegisterContainer = styled.div`
  max-width: 720px;
  min-width: 280px;

  width: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 1.5rem;

  padding: 0.625rem;
  margin: auto 0;

  > div {
    width: 50%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 0.625rem;

    border-width: 1px;
    border-style: solid;
    border-radius: 0.5rem;

    p {
      text-align: justify;
    }
  }

  @media (max-width: 719px) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;
