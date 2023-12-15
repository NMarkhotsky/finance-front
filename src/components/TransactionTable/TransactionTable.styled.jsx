import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.borderSecondaryColor};
  border-radius: 16px 16px 0 0;
  overflow: hidden;
`;

export const TableScroll = styled.div`
  width: 100%;
  height: 250px;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.secondaryBgdColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.orange};
  }

  scrollbar-width: 6px; /* для Firefox */
  scrollbar-color: ${({ theme }) => theme.colors.secondaryBgdColor};
  ${({ theme }) => theme.colors.orange}; /* для Firefox */
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.tableBgdMainColor};
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
`;

export const TableHeadTR = styled.tr`
  background-color: ${({ theme }) => theme.colors.tableBgdMainColor};
`;

export const TableHeadTH = styled.th`
  padding: 10px 20px;
  border: none;
  color: ${({ header }) => (header === 'delete' ? 'transparent' : null)};

  ${({ header }) =>
    header === 'sum' ? { textAlign: 'end' } : { textAlign: 'start' }};
`;

export const TableBody = styled.tbody`
  background-color: transparent;
  vertical-align: middle;
  max-height: 300px;
  overflow-x: auto;
`;

export const TableBodyTR = styled.tr``;

export const TableBodyTd = styled.td`
  padding: 5px 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderSecondaryColor};
  max-height: 30px;

  &:first-child {
    max-width: 60px;
  }

  &:nth-child(2) {
    min-width: 100px;
    text-align: left;
  }

  &:nth-child(3) {
    max-width: 50px;
    text-align: left;
  }

  &:nth-child(4) {
    color: ${({ theme, value }) =>
      parseFloat(value) > 0 ? theme.colors.green : theme.colors.red};
    white-space: nowrap;
    text-align: right;
  }
`;

TableHead.shouldForwardProp = prop => prop !== 'header';
TableHeadTH.shouldForwardProp = prop => prop !== 'header';
