import { css, styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { selectDesktop, selectTablet } from "../../utils";

export const Container = styled.div`
  padding-bottom: 60px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
  }

`;

export const NavLinkList = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 767px) {
    gap: 4px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

export const NavLinkItem = styled(NavLink)`
  padding: 15px 55px;
  background-color: ${({ theme }) => theme.colors.whiteTextColor};
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fonts.bold};
  letter-spacing: 0.24px;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    /* width: calc(100% / 2 - 4px); */
    width: 50%;
    background-color: #F5F6FB;
    color: ${({ theme }) => theme.colors.secondaryTextColor};

    ${({ $isActive, theme }) =>
    $isActive &&
    css`
      color: #FFFFFF;
      background-color: ${theme.colors.orange};
    `}
  }

  @media ${selectTablet} {
    background-color: #fafbfd;
    border-radius: 20px 20px 0 0;

    ${({ $isActive, theme }) =>
      $isActive &&
      css`
        color: ${theme.colors.orange};
        background-color: #fefefe;
      `}
  }
`;

export const ContainerTransaction = styled.div`
  @media screen and (max-width: 767px) {
    background: transparent;
  }

  background-color: ${({ theme }) => theme.colors.mainBgdColor};
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  border-radius: 0px 30px 30px 30px;

  @media ${selectTablet} {
    box-shadow: ${({ theme }) => theme.boxShadowColor.desktop};
    padding-top: 26px;
  }

    @media ${selectDesktop} {
    padding-bottom: 60px;
  }
`;

export const AddTransactionBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 40px;
  }

  @media ${selectTablet} {
    gap: 44px;
    align-items: stretch;
  }
`;

export const TransactionTableBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const TablesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${selectDesktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`
