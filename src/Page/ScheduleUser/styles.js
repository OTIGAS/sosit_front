import styled from "styled-components";

export const ScheduleUserContainer = styled.div`
  max-width: 1080px;
  min-width: 280px;

  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: center;

  gap: 0.625rem;

  margin: auto 0;

  @media (max-width: 719px) {
    flex-direction: column;
    margin-top: 10px;
    > div {
      width: 100%;
    }
  }
`;

export const SearchCompanySchedule = styled.div`
  width: 40%;
  height: fit-content;

  margin: auto 0;
  padding: 0.625rem;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;

  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem;

  > h1 {
    font-size: 1.25rem;
    text-align: center;
  }

  > div:nth-child(6) {
    width: 100%;
    height: 320px;

    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    align-items: center;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.color_03};

    padding: 0.3125rem;

    overflow-y: auto;

    > div {
      width: 100%;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      border-width: 1px;
      border-style: solid;
      border-radius: 0.5rem;

      background-color: ${({ theme }) => theme.colors.color_02};

      cursor: pointer;

      > div {
        width: 100%;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;

        gap: 0.3125rem;
        padding: 0.3125rem;

        strong {
          width: 50%;

          text-align: center;

          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

export const ShowCompanySchedule = styled.div`
  width: 60%;
  height: 600px;

  margin: auto 0;
  padding: 0.625rem;

  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 1.25rem;
    text-align: center;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: row;

    gap: 0.3125rem;

    > img {
      width: 150px;
      height: 150px;

      margin: auto 0;
      border-radius: 0.5rem;
    }

    > div {
      width: 100%;

      display: flex;
      flex-direction: column;

      align-items: start;
      justify-content: space-evenly;

      gap: 0.3125rem;

      > input {
        width: 100%;
        height: 30px;

        padding: 0.3125rem;
        text-align: center;

        border-style: none;
        background-color: ${({ theme }) => theme.colors.color_03};

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      > textarea {
        width: 100%;
        height: 70px;

        padding: 0.3125rem;

        border-style: none;
        background-color: ${({ theme }) => theme.colors.color_03};

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        resize: none;
      }
    }
  }
`;

export const ScheduleContent = styled.div`
  width: 100%;

  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem;
`;
