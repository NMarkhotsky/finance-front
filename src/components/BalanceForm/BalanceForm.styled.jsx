import styled from 'styled-components';


export const FormBalance = styled.form`
    display: flex;
    background-color: grey;
`

export const BalanceLabel = styled.label`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-right: 20px;
`
export const BalanceWrapper = styled.div`
    /* border: 2px solid red; */
    border: 2px solid ${({theme}) => theme.colors.borderColor};
    border-radius: 16px;
    padding: 12px 10px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    max-width: 125px;
    margin-right: 15px;
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
`

export const BalanceCurrency = styled.span``

export const Button = styled.button`
    /* border: 2px solid red; */
    border: 2px solid ${({theme}) => theme.colors.borderColor};
    border-radius: 16px;
    padding: 12px 10px;
    min-width: 125px;
    text-transform: uppercase;
`