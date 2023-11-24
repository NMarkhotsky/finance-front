import { styled } from 'styled-components';
import { Icon } from '../../shared/components/Icon/Icon';
import { selectTablet } from '../../utils/mediaRequest';

export const Modal = styled.div`
  width: 380px;
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.mainBgdColor};

  @media ${selectTablet} {
    height: 194px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.medium};
  letter-spacing: 0.28px;

  /* @media ${selectTablet} {
    margin-bottom: 40px;
    font-size: ${(props) => props.theme.fontSizes.xxl};
    line-height: 49px;
  }  */
`;

export const BtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media ${selectTablet} {
    flex-direction: row;
    gap: 15px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.btnBgdSecondaryColor};
    border-color: ${({ theme }) => theme.colors.btnBgdSecondaryColor};
  }

  :hover p {
    color: ${({ theme }) => theme.colors.mainBgdColor};
  }
`;

export const Button = styled.button`
  width: 125px;
  border-radius: 16px;
  padding: 12px 0;
  border: 2px solid ${({ theme }) => theme.colors.whiteTextColor};

  /* position: relative; */
  /* width: 100%;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: inherit;

    position: absolute;
    top: 0;
    left: 0;

    background: ${({ theme }) => theme.colors.blueGradient};
    opacity: 0;

    transition: opacity ${({ theme }) => theme.transitionHover}; */
  /* }

  @media ${selectTablet} {
    width: 129px;
    padding: 8px 20px;
  } */
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${(props) => props.theme.fontSizes.xs};
  letter-spacing: 0.24px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.bold};
  z-index: 5;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StyledIcon = styled(Icon)`
  stroke: ${({ theme }) => theme.colors.mainTextColor};
`;
