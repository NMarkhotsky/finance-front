import styled from 'styled-components';
import { selectTablet } from '../../../utils/mediaRequest';

export const AuthButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  @media ${selectTablet} {
    gap: 15px;
  }
`;

export const Button = styled.button`
  width: 122px;
  height: 44px;
  text-transform: uppercase;

  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme, type }) =>
    type === 'button'
      ? theme.colors.secondaryTextColor
      : theme.colors.whiteTextColor};

  background-color: ${({ theme, type }) =>
    type === 'button'
      ? theme.colors.btnBgdMainColor
      : theme.colors.btnBgdSecondaryColor};

  border-radius: 16px;

  &:hover {
    background-color: ${({ type }) =>
      type === 'button' ? '#d5d5d6' : '#d35b10'};
  }
`;
