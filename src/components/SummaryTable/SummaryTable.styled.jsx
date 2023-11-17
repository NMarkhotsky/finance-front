import styled from "styled-components";
// import { selectTablet } from '../../utils/mediaRequest';

export const TableContainer = styled.div`
    /* display: flex;
    justify-content: center; */
    width: 100%;
    /* border: 2px solid ${({ theme }) => theme.colors.borderSecondaryColor}; */
    border-radius: 16px 16px 0 0;
    overflow: hidden;
`

export const Table = styled.table`
    /* border-collapse: collapse;  */
    width: 100%;

`

export const TableHead = styled.thead`
    text-transform: uppercase;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.tableBgdMainColor};
    padding: 0;
    /* width: ${({header}) => header === 'month' ? 0 : '100%'}; */
    /* display: ${({ header }) => header === 'summary' ? 'flex' : 'none'}; */
    /* width: 100%; */
`

export const TableHeadTR = styled.tr`
    /* width: ${({header}) => header === 'month' ? 0 : '100%'}; */
    /* background-color: ${({theme})=> theme.colors.tableBgdMainColor}; */
`

export const TableHeadTH = styled.th`
    /* border: none;
    
    color: ${({ header }) => header === 'delete' ? 'transparent' : null}; */
    /* width: ${({header}) => header === 'month' ? 0 : '100%'}; */

`

export const TableBody = styled.tbody`
    /* background-color: transparent;
    vertical-align: middle;
    max-height: 300px;
    overflow-x: auto; */
`

export const TableBodyTR = styled.tr`

`

export const TableBodyTd = styled.td`
    height: 40px;
    background-color: ${({ theme }) => theme.colors.tableBgdMainColor};
    text-transform: uppercase;
    text-align: center;
`

TableHead.shouldForwardProp = (prop) => prop !== 'header';
TableHeadTH.shouldForwardProp = (prop) => prop !== 'header';