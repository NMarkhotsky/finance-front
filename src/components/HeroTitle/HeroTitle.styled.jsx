import styled from 'styled-components';

export const HeroContainer = styled.div``;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.mega};
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: #52555f;
`;
