import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../../utils/mediaRequest';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 480px;
  height: 600px;

  padding: 40px 20px;

  border-radius: 16px;

  box-shadow: ${({ theme }) => theme.boxShadowColor.mobile};
  background-color: ${({ theme }) => theme.colors.mainBgdColor};

  @media ${selectTablet} {
    width: 426px;
    /* height: 600px; */

    padding: 56px 84px;

    border-radius: 30px;

    box-shadow: ${({ theme }) => theme.boxShadowColor.tablet};
  }

  @media ${selectDesktop} {
    box-shadow: ${({ theme }) => theme.boxShadowColor.desktop};
  }
`;
