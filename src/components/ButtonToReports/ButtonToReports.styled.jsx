import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerButtonToReports = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const TextButton = styled.p`
  color: ${({ theme }) => theme.colors.greyTextColor};
  font-size: ${props => props.theme.fontSizes.xs};
 letter-spacing: 0.48px;
`;
