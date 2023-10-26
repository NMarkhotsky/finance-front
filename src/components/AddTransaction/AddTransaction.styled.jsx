import styled from "styled-components";
import { selectTablet, selectDesktop } from '../../utils/mediaRequest';

export const AddTransactionForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media ${selectTablet} {
        gap: 34px;
    }
`
export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${selectTablet} {
        flex-direction: row;
        justify-content: center;
    }
`
export const DescriptionInput = styled.input`
    width: 280px;
    height: 44px;
    background-color: transparent;
    border-radius: 20px 20px 0 0;
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.greyLightTextColor};
    &::placeholder {
        color: ${({ theme }) => theme.colors.greyLightTextColor};
    }

    @media ${selectTablet} {
        height: 40px;
        border-radius: 16px 0 0 0;
        width: 180px;
    }

    @media ${selectDesktop} {
        width: 200px;
    }
`
export const CategoryInput = styled.div`
    width: 280px;
    height: 44px;
    background-color: transparent;
    border-radius: 0 0 20px 0;
    padding: 0 10px;
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    margin-bottom: 32px;
    
    @media ${selectTablet} {
        height: 40px;
        border-radius: 0;
        border-left: none;
        width: 186px;
        margin-bottom: 0;
    }

`
export const SumInput = styled.div`
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 22px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.secondaryTextColor};
    display: flex;
    margin: 0 auto;
    max-width: 183px;
    height: 44px;
    display: flex;
    align-items: center;

    @media ${selectTablet} {
        height: 40px;
        border-radius: 0 16px 16px 0;
        margin-left: -2px;
        width: 130px;
    }
`

export const SumWrapper = styled.div`
    border-right: 2px solid ${({ theme }) => theme.colors.borderColor};
    padding: 12px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
    
    @media ${selectTablet} {
        border-right: none;
    }

    @media ${selectDesktop} {
        width: 150px;
        padding: 2px;
    }
`

export const Sum = styled.input`
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
    font-weight: 700;

    @media ${selectTablet} {
        max-width: 40px;
    }
`

export const Currency = styled.span``

export const CalcIconWrapper = styled.div`
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 80px;
`

export const AcceptButton = styled.button`
    min-width: 130px;
    min-height: 44px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.btnBgdSecondaryColor};
    color: ${({ theme }) => theme.colors.whiteTextColor};
    text-transform: uppercase;
    font-weight: 700;
    box-shadow: ${({ theme }) => theme.boxShadowColor.orangeBtn};

    @media ${selectTablet} {
        width: 125px;
    }

    @media ${selectTablet} {
        width: 136px;
    }
`
export const ClearButton = styled.button`
    min-width: 130px;
    min-height: 44px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.btnBgdMainColor};
    color: ${({ theme }) => theme.colors.greyTextColor};
    text-transform: uppercase;
    font-weight: 700;
    box-shadow: ${({ theme }) => theme.boxShadowColor.greyBtn};

    @media ${selectTablet} {
        width: 125px;
    }

    @media ${selectTablet} {
        width: 136px;
    }    
`

export const SelectListStyles = {
    control: styles => ({
        ...styles,
        backgroundColor: 'transparent',
        border: 'none',
    }),
    indicatorSeparator: styles => ({
        ...styles,
        display: 'none',
    }),
    placeholder: styles => ({
        ...styles,
        color: '#C7CCDC',
    }),
    menuList: styles => ({
        ...styles,
        color: '#C7CCDC',
        border: '2px solid #F5F6FB',
        '::-webkit-scrollbar': {
            width: 0,
        }, 
        boxShadow: '0px 3px 4px 0px rgba(170, 178, 197, 0.40)'
    }),
    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        backgroundColor: isFocused || isSelected ? '#C7CCDC' : '#FFF',
        color: isFocused || isSelected ? '#52555F' : '#C7CCDC',
        }),    
}
