import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../../utils/mediaRequest';

export const AuthContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 50px;
  margin-top: 86px;

  @media ${selectTablet} {
    gap: 80px;
    margin-top: 80px;
    align-items: center;
  }

  @media ${selectDesktop} {
    flex-direction: row;
    gap: 160px;
    margin-top: 117px;
  }
`;

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

    margin-top: 0px;

    padding: 56px 84px;

    border-radius: 30px;

    box-shadow: ${({ theme }) => theme.boxShadowColor.tablet};
  }

  @media ${selectDesktop} {
    /* margin: 117px 0 0 0; */

    box-shadow: ${({ theme }) => theme.boxShadowColor.desktop};
  }
`;
