import styled from "styled-components";
// import { selectTablet } from '../../utils/mediaRequest';

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    
`

export const Table = styled.table`

    border-radius: 16px 16px 0 0;
    border-collapse: collapse;
    border: 2px solid ${({theme})=> theme.colors.borderSecondaryColor};
    overflow: hidden;
    width: 100%;
`

export const TableHead = styled.thead`
    text-transform: uppercase;
    height: 40px;
    background-color: ${({theme})=> theme.colors.tableBgdMainColor};
    /* border: 2px solid ${({theme})=> theme.colors.borderSecondaryColor}; */

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
    /* border: 2px solid ${({theme})=> theme.colors.borderSecondaryColor}; */

`

export const TableBodyTR = styled.tr`
/* border: 2px solid ${({theme})=> theme.colors.borderSecondaryColor}; */
`

export const TableBodyTd = styled.td`
    padding: 5px;
    border-bottom: 2px solid ${({theme})=> theme.colors.borderSecondaryColor};

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
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

TableHead.shouldForwardProp = (prop) => prop !== 'header';
TableHeadTH.shouldForwardProp = (prop) => prop !== 'header';