import { css, styled } from "styled-components";

export const ItemCategories = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${(props) => props.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`;

export const ImageBox = styled.div`
  position: relative;
  display: inline-block;
`;

export const ImgBackground = styled.div`
  position: absolute;
  top: 30%;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: #ffdac0;
    `}
`;

export const Img = styled.div`
  position: relative;
  margin-top: 5px;
`;

export const Title = styled.h3`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-size: ${(props) => props.theme.fontSizes.xs};
  letter-spacing: 0.24px;
  text-transform: uppercase;
`;
