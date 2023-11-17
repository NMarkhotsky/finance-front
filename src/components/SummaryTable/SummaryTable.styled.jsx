import styled from "styled-components";
import { selectDesktop } from '../../utils/mediaRequest';

export const TableContainer = styled.div`
    min-width: 230px;
    border-radius: 16px 16px 0 0;
    overflow: hidden;

    @media ${selectDesktop} {
        min-width: 200px;
    }
`

export const Table = styled.table`
    width: 100%;

`

export const TableHead = styled.thead`
    text-transform: uppercase;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.tableBgdMainColor};
    color: ${({ theme }) => theme.colors.secondaryTextColor};
`

export const TableHeadTR = styled.tr`
`

export const TableHeadTH = styled.th`
    display: ${({header}) => header === 'month' || header === 'sum' ? 'none' : null};
`

export const TableBody = styled.tbody`
`

export const TableBodyTR = styled.tr`
`

export const TableBodyTd = styled.td`
    height: 40px;
    background-color: ${({ theme }) => theme.colors.tableBgdMainColor};
    text-transform: uppercase;
    text-align: center;
    width: 50%;
    color: ${({ theme }) => theme.colors.darkTextColor};
`

TableHead.shouldForwardProp = (prop) => prop !== 'header';
TableHeadTH.shouldForwardProp = (prop) => prop !== 'header';