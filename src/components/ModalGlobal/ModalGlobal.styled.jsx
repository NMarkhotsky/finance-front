import { styled } from 'styled-components';
import { Icon } from '../Icon/Icon';
import { selectTablet } from '../../utils/mediaRequest';

export const Modal = styled.div`
  width: 380px;
  padding: 60px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.mainTextColor};

  @media ${selectTablet} {
    padding: 60px 108px;
    width: 608px;
    border-radius: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 14px;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.text};

  @media ${selectTablet} {
    margin-bottom: 40px;
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: 49px;
  }
`;

export const Text = styled.p`
  margin-bottom: 44px;
  font-size: ${props => props.theme.fontSizes.sm};
  font-family: ${props => props.theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.14px;

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.md};
    line-height: 22px;
  }
`;

export const PetName = styled.span`
  font-family: ${props => props.theme.fonts.bold};
`;




export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media ${selectTablet} {
    flex-direction: row;
    gap: 17px;
  }
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;

  font-size: ${props => props.theme.fontSizes.md};
  line-height: 1.2;
  letter-spacing: 0.64px;
  font-family: ${props => props.theme.fonts.bold};

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

    transition: opacity ${({ theme }) => theme.transitionHover};
  }

  @media ${selectTablet} {
    width: 129px;
    padding: 8px 20px;
  }
`;

export const CancelButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.blue};
  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};
    &::before {
      opacity: 1;
    }
  }
`;

export const YesButton = styled(Button)`
  gap: 8px;
  padding: 6px 12px;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    background-color: transparent;
    &::before {
      opacity: 1;
    }
  }
`;

export const StyledPawButton = styled(Button)`
  gap: 12px;
  margin: 0 auto;
  padding: 8px 28px;
  border: none;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    background-color: transparent;
    &::before {
      opacity: 1;
    }
  }

  @media ${selectTablet} {
    width: 248px;
  }
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 5;
  font-weight: 700;
  font-size: 16px;
`;

export const IconWraper = styled.div`
  position: relative;
  z-index: 5;
`;

export const StyledIcon = styled(Icon)`
  stroke: ${({ theme }) => theme.colors.white};
  fill: transparent;
`;