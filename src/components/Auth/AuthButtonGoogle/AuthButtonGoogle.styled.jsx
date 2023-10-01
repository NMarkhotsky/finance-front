import styled from 'styled-components';

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin: 0 auto;

  width: 120px;
  height: 40px;

  border-radius: 26px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.btnGoogleColor};
`;
