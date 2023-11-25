import styled from "styled-components";
import { selectTablet } from "../../utils";

export const PageTopBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 32px;

    @media ${selectTablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        margin-top: 40px;
    }
`

export const BackButtonItem = styled.div`
    order: 1;
`
export const BalanceFormItem = styled.div`
    order: 3;
    @media screen and (max-width: 767px) {
        margin-top: 17px;
    }

    @media ${selectTablet} {
        order: 2;
    }
`
export const SelectCurrentPeriodItem = styled.div`
    order: 2;

    @media ${selectTablet} {
        order: 3;
    }
`
export const TotalCountFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    order: 4;
`