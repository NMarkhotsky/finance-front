import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils/mediaRequest';


export const FormBalance = styled.form`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    display: flex;
    flex-direction: column;
    /* gap: 8px; */
    padding: 11px;
    

        @media ${selectTablet} {
            font-size: ${({ theme }) => theme.fontSizes.sm};
            flex-direction: row;
            justify-content: center;
        }        
        @media ${selectDesktop} {
            gap: 20px;
        
    }    

`
export const BalanceBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BalanceLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${selectTablet} {
        margin-right: 12px;
    }
    
`
export const BalanceWrapper = styled.div`
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 22px 0 0 22px;
    padding: 16px 12px;
    background: transparent;
    display: flex;
    justify-content: right;
    align-items: center;
    flex-wrap: nowrap;
    width: 140px;
    height: 44px;

    @media ${selectTablet} {
        border-radius: 16px;
        padding: 12px 10px;
        max-width: 125px;
        
    }

    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({theme})=> theme.colors.secondaryTextColor};
    
`
export const BalanceInput = styled.input`

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }
    
    outline: none;
    border: none;
    background-color: transparent;
    max-width: 70px;
    text-align: right;

    &:disabled {
        color: ${({theme})=> theme.colors.secondaryTextColor};
    }

    @media ${selectDesktop} {
        font-size: ${({ theme }) => theme.fontSizes.sm};
            
    }    
`

export const BalanceCurrency = styled.span`
    @media ${selectDesktop} {
        font-size: ${({ theme }) => theme.fontSizes.sm};
            
    }    
`

export const Button = styled.button`

    border: 2px solid ${({theme}) => theme.colors.borderColor};
    border-radius: 0 22px 22px 0;
    width: 140px;
    height: 44px;
    margin-left: -2px;
    text-transform: uppercase;
    &:enabled {
        background-color: ${({ theme }) => theme.colors.btnBgdSecondaryColor};
        color: ${({ theme }) => theme.colors.whiteTextColor};
    }

    &:disabled {
        cursor: auto;
    }

    @media ${selectTablet} {
        border-radius: 16px;
        min-width: 125px;
        padding: 12px 10px;
        width: 125px;
        margin-left: 15px;
    }

`