import styled from "styled-components";
import { selectDesktop } from '../../utils/mediaRequest';

export const TableContainer = styled.div`
    width: 250px;
    border-radius: 16px 16px 16px 0;
    overflow: hidden;

    @media ${selectDesktop} {
        min-width: 250px;
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
    /* text-align: center; */
    width: 50%;
    color: ${({ theme }) => theme.colors.darkTextColor};
    padding-left: 22px;
    padding-right: 22px;

    &:first-child {
        text-align: start;
    }

    &:last-child {
        text-align: end;
    }
`

TableHead.shouldForwardProp = (prop) => prop !== 'header';
TableHeadTH.shouldForwardProp = (prop) => prop !== 'header';