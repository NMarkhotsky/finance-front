import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../../utils';

export const BackgroundWrapperAuth = styled.div`
  position: absolute;

  background-color: #f5f6fb;
  width: 100%;
  height: 635px;
  top: 0;
  left: 0;

  z-index: -1;

  border-bottom-left-radius: 100px;

  overflow: hidden;

  @media ${selectDesktop} {
    overflow: visible;
  }

  & > svg {
    width: 1280px;
    height: 65%;

    @media ${selectDesktop} {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  pointer-events: none;
`;

export const BackgroundWrapperMain = styled.div`
  position: absolute;

  background-color: #f5f6fb;
  width: 100%;
  height: 635px;
  top: 0;
  left: 0;

  z-index: -1;

  border-bottom-left-radius: 100px;

  @media ${selectDesktop} {
  }

  & > svg {
    position: absolute;
    width: 1280px;
    height: 65%;
    bottom: -400px;

    @media ${selectDesktop} {
      width: 100%;
    }
  }
`;

export const Bgd = styled.div`
  position: absolute;
  bottom: -20%;
  left: -10%;

  z-index: -1;

  @media ${selectTablet} {
    bottom: -13%;
    left: 2%;
  }

  @media ${selectDesktop} {
    bottom: -10%;
    left: 10%;
  }
`;

// export const ChildrenWrapper = styled.div`
/* position: absolute; */
/* top: 0; */
/* left: 0; */

/* width: 100%; */
/* height: 100%; */
// `;
