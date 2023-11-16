import styled from "styled-components";
// import { selectTablet } from '../../utils/mediaRequest';

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.borderSecondaryColor};
    border-radius: 16px 16px 0 0;
    overflow: hidden;
`

export const Table = styled.table`
    border-collapse: collapse; 
    width: 100%;

`

export const TableHead = styled.thead`
    text-transform: uppercase;
    height: 40px;
    background-color: ${({theme})=> theme.colors.tableBgdMainColor};
`

export const TableHeadTR = styled.tr`
    background-color: ${({theme})=> theme.colors.tableBgdMainColor};
`

export const TableHeadTH = styled.th`
    border: none;
    color: ${({header}) => header === 'delete' ? 'transparent' : null};
`

export const TableBody = styled.tbody`
    background-color: transparent;
    vertical-align: middle;
    max-height: 300px;
    overflow-x: auto;
`

export const TableBodyTR = styled.tr`

`

export const TableBodyTd = styled.td`
    padding: 5px;
    border-bottom: 2px solid ${({theme})=> theme.colors.borderSecondaryColor};
    max-height: 30px;

    &:first-child {
        max-width: 60px;
    }

    &:nth-child(2) {
        max-width: 100px;
        text-align: left;
    }

    &:nth-child(3) {
        max-width: 100px;
        text-align: center;
    }    

    &:nth-child(4) {
        color: ${({ theme, value }) => (parseFloat(value) > 0 ? theme.colors.green : theme.colors.red)};
        white-space: nowrap;
        text-align: right;
    }
    
    &:nth-child(5) {
        text-align: center;
    }

`

TableHead.shouldForwardProp = (prop) => prop !== 'header';
TableHeadTH.shouldForwardProp = (prop) => prop !== 'header';