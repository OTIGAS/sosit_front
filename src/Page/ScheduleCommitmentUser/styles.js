import styled from "styled-components";

export const ScheduleCommitmentUserContainer = styled.div`
  max-width: 720px;
  min-width: 280px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 10px;

  padding: 0.3125rem 0;

  > h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  > strong {
    font-size: 1.25rem;
    text-align: center;
  }

  .commitment {
    background-color: #f87171;
    cursor: no-drop;
  }
`;

export const TimesContainer = styled.div`
  max-width: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 0.3125rem;

  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem;

  gap: 0.3125rem;

  > div {
    width: 100%;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;

    border-width: 1px;
    border-style: solid;
    border-radius: 0.5rem;

    padding: 0.625rem;

    > img {
      width: 30px;
      height: 30px;
    }

    cursor: pointer;
  }
`;
