import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`

`;

export const NavLinkList = styled.ul`
  display: flex;
      list-style: none;
`

export const NavLinkItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fonts.bold};
  letter-spacing: 0.24px;
  text-transform: uppercase;
  background-color: #fafbfd;
  padding: 15px 55px;
  border-radius: 20px 20px 0 0;

  &.active {
    color: ${({ theme }) => theme.colors.orange};
    background-color: #fefefe;
  }
`;

export const ContainerTransaction = styled.div`
    background-color: ${({ theme }) => theme.colors.mainBgdColor};
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    box-shadow: ${({ theme }) => theme.boxShadowColor.desktop};
    border-radius: 0px 30px 30px 30px;

`
