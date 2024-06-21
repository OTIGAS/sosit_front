import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: ${({ isOpenSidebar }) => (isOpenSidebar ? "250px" : "40px")};
  height: 100%;

  background-color: ${({ theme }) => theme.colors.color_03};

  padding-top: 0.3125rem;

  overflow-x: hidden;
  transition: width 0.3s ease;

  z-index: 10;
`;

export const SidebarHeader = styled.div`
  height: 40px;
  padding: 0 5px;

  display: flex;
  align-items: center;
  justify-content: ${({ isOpenSidebar }) =>
    isOpenSidebar ? "space-between" : "center"};
`;

export const ToggleButton = styled.button`
  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const SidebarContent = styled.nav`
  padding: 0.625rem;

  display: flex;
  flex-direction: column;

  gap: 0.875rem;

  > h1 {
    min-width: 14.375rem;

    overflow: hidden;
    white-space: nowrap;
    font-size: 1.25rem;

    text-align: center;
    text-overflow: ellipsis;
  }

  > a {
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.125rem;

    text-align: center;
    text-decoration: none;

    border-radius: 0.5rem;

    color: ${({ theme }) => theme.colors.color_11};
    background-color: ${({ theme }) => theme.colors.color_04};

    &:hover {
      background-color: ${({ theme }) => theme.colors.color_03};
    }
  }

  a.active {
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.color_03};
  }
`;

export const ImageContent = styled.img`
  width: 2.1875rem;
  border-radius: 0.5rem;
  &:hover {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors.color_06};
  }
`;
