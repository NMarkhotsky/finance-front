import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;

  margin: 0 auto;
  padding: 13px 20px;

  background-color: ${({ theme }) => theme.colors.mainBgdColor};

  @media ${selectTablet} {
    padding: 13px 32px;
  }

  @media ${selectDesktop} {
    /* max-width: 1280px; */

    padding: 13px 16px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 0;

  font-size: ${({ theme }) => theme.fontSizes.xs};

  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const UserLogo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  border-radius: 50%;

  font-family: ${({ theme }) => theme.fonts.bold};

  background-color: #f5f6fb;
`;

export const UserName = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
  position: relative;

  margin-left: 12px;
  margin-right: 20px;

  &::after {
    content: '';

    position: absolute;
    top: -10px;

    margin-left: 20px;
    width: 1px;
    height: 36px;

    background-color: #e0e5eb;
  }
`;

export const LogoutButton = styled.button`
  margin-left: 20px;

  
`;

export const LogoutButtonText = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }

  text-decoration: underline;
`

export const LogoutIconWrapper = styled.span`
  @media ${selectTablet} {
    display: none;
  }
`