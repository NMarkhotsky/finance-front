import styled from "styled-components";
import { selectTablet } from '../../utils/mediaRequest';

export const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: purple;
    
`

export const Table = styled.table`
    border: 2px solid #F5F6FB;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    /* background-color: #F5F6FB; */
`

export const TableHead = styled.thead`
    text-transform: uppercase;
    height: 40px;
    background-color: #F5F6FB;
    border: 2px solid #F5F6FB;

    /* ${({header}) => header === 'delete' ? 'display: none' : null}; */
    /* display: none; */

    /* @media ${selectTablet} {
        /* display: flex; */
        
    /* */

`

export const TableHeadTR = styled.tr`
    /* ${({header}) => header === 'delete' ? 'display: none' : null}; */
    
`

export const TableHeadTH = styled.th`
        ${({header}) => header === 'delete' ? 'display: none' : null};
`

export const TableBody = styled.tbody`
    background-color: #F5F6FB;
`

export const TableBodyTR = styled.tr`
    
`

export const TableBodyTd = styled.td`
    
`

export const DeleteBtn = styled.button`

`

TableHead.shouldForwardProp = (prop) => prop !== 'header';
TableHeadTH.shouldForwardProp = (prop) => prop !== 'header';