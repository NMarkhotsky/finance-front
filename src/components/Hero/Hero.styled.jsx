import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils/mediaRequest';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${selectTablet} {
    min-width: 426px;
  }

  @media ${selectDesktop} {
    margin-top: 0;
    margin-left: 200px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.gigantic};

  color: ${({ theme }) => theme.colors.secondaryTextColor};

  @media ${selectTablet} {
    font-size: 82px;
  }

  @media ${selectDesktop} {
    font-size: ${({ theme }) => theme.fontSizes.mega};
  }
`;

export const HeroSubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  letter-spacing: 2.88px;

  text-transform: uppercase;

  @media ${selectTablet} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
