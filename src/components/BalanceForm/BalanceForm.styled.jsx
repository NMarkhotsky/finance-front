import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils/mediaRequest';

export const FormBalance = styled.form`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${selectTablet} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;
export const BalanceBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BalanceLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    margin-bottom: 8px;
  }
`;
export const BalanceWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ $location }) =>
    $location === '/report' ? '22px' : '22px 0 0 22px'};
  padding: 16px 12px;
  background: transparent;
  display: flex;
  justify-content: ${({ $location }) =>
    $location === '/report' ? 'center' : 'right'};
  align-items: center;
  flex-wrap: nowrap;
  height: 44px;

  @media ${selectTablet} {
    border-radius: 16px;
    padding: 12px 10px;
    justify-content: center;
    max-width: 100%;
  }

  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;
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
  width: ${({ $location }) => ($location === '/report' ? '40%' : '100%')};
  text-align: right;

  &:disabled {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
  }

  @media ${selectTablet} {
    width: ${({ $location }) => ($location === '/report' ? '40%' : '40%')};
  }

  @media ${selectDesktop} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const BalanceCurrency = styled.span`
  @media ${selectDesktop} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 0 22px 22px 0;
  width: 100%;
  height: 44px;
  text-transform: uppercase;
  padding: 12px 16px;

  &:enabled {
    background-color: ${({ theme }) => theme.colors.btnBgdSecondaryColor};
    color: ${({ theme }) => theme.colors.whiteTextColor};
  }

  &:disabled {
    cursor: auto;
  }

  @media screen and (max-width: 767px) {
    width: 50%;
    text-align: left;
    border-width: 2px 2px 2px 0;
  }

  @media screen and (max-width: 1279px) {
    display: ${({ $location }) => ($location === '/report' ? 'none' : 'block')};
  }

  @media ${selectTablet} {
    border-radius: 16px;
    min-width: 125px;
    padding: 12px 10px;
    width: 125px;
    margin-left: 15px;
  }
`;
