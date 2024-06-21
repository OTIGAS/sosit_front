import styled from "styled-components";

export const CommitmentCompanyContainer = styled.div`
  max-width: 1080px;
  min-width: 280px;

  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;

  margin: auto 0;
  padding: 0.625rem;
  gap: 0.625rem;

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;

    gap: 0.625rem;

    @media (max-width: 720px) {
      flex-direction: column;
    }
  }

  > div:nth-child(2) {
    height: 720px;
    padding: 0.625rem;

    border-width: 1px;
    border-style: solid;
    border-radius: 0.5rem;

    overflow-x: auto;
    overflow-y: auto;
  }
`;

export const Table = styled.table`
  width: 1080px;
  height: fit-content;

  font-size: 0.875rem;
  text-align: center;

  overflow-x: auto;
  overflow-y: auto;
`;

export const TableHeader = styled.th`
  padding: 0.625rem 0;
  color: ${({ theme }) => theme.colors.color_01};
  background-color: ${({ theme }) => theme.colors.color_06};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    min-width: fit-content;
    width: fit-content;
  }
`;

export const TableRow = styled.tr`
  min-height: 30px;
  max-height: 30px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.color_06};

  background-color: ${({ theme }) => theme.colors.color_03};
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.color_04};
  }
`;

export const TableData = styled.td`
  padding: 0.3125rem 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    width: 30px;
    height: 30px;

    margin: 0 auto;
  }

  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    width: fit-content;
    cursor: pointer;
    &:hover {
      transition: 0.3s;
      background-color: ${({ theme }) => theme.colors.color_05};
    }
  }
`;
