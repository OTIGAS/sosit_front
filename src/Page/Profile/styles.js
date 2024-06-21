import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 720px;
  min-width: 280px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  gap: 1.25rem;

  padding: 0.625rem 0;

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 0.625rem;

    > h1 {
      font-size: 1.5rem;
    }

    > img {
      margin: 0 auto;
      height: 7.5rem;

      border-width: 1px;
      border-style: solid;
      border-radius: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  > div:nth-child(1) {
    height: fit-content;
    flex-direction: row;

    justify-content: space-around;

    > a {
      cursor: pointer;

      height: 2.5rem;
      padding: 0 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.125rem;

      text-align: center;
      text-decoration: none;

      border-radius: 0.5rem;

      color: ${({ theme }) => theme.colors.color_11};
      background-color: ${({ theme }) => theme.colors.color_02};

      &:hover {
        background-color: ${({ theme }) => theme.colors.color_04};
      }
    }

    > a.active {
      font-weight: bold;
      background-color: ${({ theme }) => theme.colors.color_05};
    }
  }

  > div:nth-child(3) {
    height: fit-content;
  }
`;
