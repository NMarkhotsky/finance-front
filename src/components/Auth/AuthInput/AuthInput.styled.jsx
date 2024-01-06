import styled from 'styled-components';
import { selectTablet } from '../../../utils/mediaRequest';

export const Input = styled.input`
  width: 240px;
  height: 52px;

  padding: 17px 20px;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: 30px;
  border: transparent;

  color: ${({ theme }) => theme.colors.inputTextColor};
  background-color: ${({ theme }) => theme.colors.inputBgdColor};

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholderColor};
  }

  @media ${selectTablet} {
    width: 259px;
  }
`;
