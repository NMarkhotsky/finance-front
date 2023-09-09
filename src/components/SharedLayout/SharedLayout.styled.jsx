import styled from 'styled-components';
import { selectPhone, selectTablet, selectDesktop } from '../../utils';

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${selectPhone} {
    max-width: 480px;
  }

  @media ${selectTablet} {
    max-width: 768px;
    padding: 0 32px;
  }

  @media ${selectDesktop} {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
