import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: fit-content;

  > div:first-child {
    width: 100%;
    height: 2.5rem;

    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    > img {
      width: 2.5rem;
      height: auto;

      cursor: pointer;
      border-radius: 0.5rem;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary_01};
      }
    }

    > h1 {
      min-width: 8.4375rem;

      overflow: hidden;
      white-space: nowrap;
      font-size: 1.25rem;

      text-align: center;
      text-overflow: ellipsis;
    }

    > div {
      display: flex;
      flex-direction: row;

      gap: 0.3125rem;

      button {
        width: 2.5rem;
        height: 2.5rem;

        display: flex;

        align-items: center;
        justify-content: center;

        border-width: 0;
        border-radius: 1.25rem;

        img {
          width: 2.5rem;
          height: auto;

          cursor: pointer;
        }
      }
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;

    gap: 0.5rem;

    @media (min-width: 421px) {
      > a {
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

        &:hover {
          background-color: ${({ theme }) => theme.colors.color_04};
        }
      }

      > a.active {
        font-weight: bold;
        background-color: ${({ theme }) => theme.colors.color_03};
      }
    }

    @media (max-width: 420px) {
      flex-direction: column;

      > a {
        width: 100%;
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

        &:hover {
          background-color: ${({ theme }) => theme.colors.color_04};
        }
      }

      > a.active {
        font-weight: bold;
        background-color: ${({ theme }) => theme.colors.color_03};
        order: 1;
      }

      > a {
        order: 0;
      }
    }
  }
`;
