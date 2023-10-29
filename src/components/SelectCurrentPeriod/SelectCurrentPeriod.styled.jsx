import styled from "styled-components";

export const ContainerSelectCurrentPeriod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.greyTextColor};
  font-size: ${(props) => props.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`;

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
`;

export const TextFormattedDate = styled.p`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: ${(props) => props.theme.fonts.bold};
  letter-spacing: 0.28px;
  text-transform: uppercase;
`;

export const ContainerFormattedDate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
