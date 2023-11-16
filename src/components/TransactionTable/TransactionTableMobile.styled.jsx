import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const TableHead = styled.thead`
    display: none;
`

export const TableHeadTR = styled.tr`

`

export const TableHeadTH = styled.th`
    ${({header}) => header === 'delete' ? 'display: none' : null};
`

export const TableBody = styled.tbody`
    background-color: transparent;
`

export const TableBodyTR = styled.tr`

`

export const TableBodyTd = styled.td`
    padding: 5px;
    width: 100%; 
    border-bottom: 2px solid ${({ theme }) => theme.colors.borderSecondaryColor};

    &:first-child, &:nth-child(2) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    &:first-child {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        font-weight: 700;
        border-bottom: none;
    }

    &:nth-child(2) {
        font-size: ${({ theme }) => theme.fontSizes.xxxs};
    }

    &:nth-child(3) {
        vertical-align: bottom;
        font-size: ${({ theme }) => theme.fontSizes.xxxs};
    }

    &:nth-child(4) {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        color: ${({ theme, value }) => (parseFloat(value) > 0 ? theme.colors.green : theme.colors.red)};
        white-space: nowrap;
    }

`

TableHead.shouldForwardProp = (prop) => prop !== 'header';
TableHeadTH.shouldForwardProp = (prop) => prop !== 'header';