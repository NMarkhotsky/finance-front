import styled from "styled-components";
import { selectTablet } from "../../utils";

export const TotalCountFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    width: 100%;
    border-radius: 20px;
    background-color: ${({theme}) => theme.colors.mainBgdColor};
    box-shadow: ${({theme}) => theme.boxShadowColor.mobile};
    justify-content: center;
    padding: 7px;

    @media ${selectTablet} {
        box-shadow: none;
        align-items: center;
    }
`
export const TypeCountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 50%;
    align-items: center;
    gap: 2px;


    &:first-child {
        border-right: 1px solid #E0E5EB;
        justify-content: end;
    }

    @media ${selectTablet} {
        flex-direction: row;
        padding: 8px 20px;
        gap: 15px;
    }
`

export const TypeCountTitle = styled.p`
    display: block;
    color: ${({theme}) => theme.colors.mainTextColor};
    font-weight: 700;
    font-size: 14px;
    
`
export const TypeCountSum = styled.p`
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    color: ${({ type, theme }) => type === 'income' ?
        theme.colors.green :
            theme.colors.red};

`