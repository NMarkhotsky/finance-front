import { css, styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { selectTablet } from "../../utils";

export const Container = styled.div`
  padding-top: 60px;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const NavLinkList = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 480px) {
    gap: 4px;
    position: absolute;
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

  @media screen and (max-width: 480px) {
    width: calc(100% / 2 - 4px);
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
  @media screen and (max-width: 480px) {
    background: transparent;
  }

  background-color: ${({ theme }) => theme.colors.mainBgdColor};
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 32px;
  border-radius: 0px 30px 30px 30px;

  @media ${selectTablet} {
    box-shadow: ${({ theme }) => theme.boxShadowColor.desktop};
  }
`;

export const AddTransactionBox = styled.div`
  display: flex;
  align-items: baseline;
`;

export const TransactionTableBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;
