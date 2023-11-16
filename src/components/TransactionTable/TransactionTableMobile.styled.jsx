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
    width: 100%;
    /* background-color: #F5F6FB; */
`

export const TableHead = styled.thead`
    text-transform: uppercase;
    height: 40px;
    background-color: #F5F6FB;
    border: 2px solid #F5F6FB;
    display: none;

    @media ${selectTablet} {
    }

    /* ${({header}) => header === 'delete' ? 'display: none' : null}; */
    /* display: none; */

    

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
    padding: 5px;
    width: 100%; 



    &:first-child, &:nth-child(2) {
        display: flex;
        flex-direction: column;
    }

    &:first-child {
        color: #52555F;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.48px;
    }

    &:nth-child(2) {
        color: #52555F;
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

    }
        &:nth-child(3) {
            vertical-align: bottom;
            color: #52555F;
            font-size: 8px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.32px;
        }

`

TableHead.shouldForwardProp = (prop) => prop !== 'header';
TableHeadTH.shouldForwardProp = (prop) => prop !== 'header';