import { styled } from "styled-components";

export const ContainerMain = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBgdColor};
  border-radius: 30px;
  padding: 20px 0;
  margin-top: 32px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBgdColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ButtonIcon = styled.button`
`

export const TabButton = styled.button`
display: ${({ $active }) => ($active ? 'flex' : 'none')};
color: ${({ theme }) => theme.colors.secondaryTextColor};
font-size: ${(props) => props.theme.fontSizes.sm};
font-family: ${(props) => props.theme.fonts.bold};
letter-spacing: 0.28px;
text-transform: uppercase;
`;


