import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: start;

  padding: 0.5rem;

  > div {
    opacity: 0;
    transition: translateX(-20px);
    animation: animeLeft 0.5s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
