import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils';

export const HeaderContainer = styled.header`
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
