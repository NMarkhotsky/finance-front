import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
display: flex;
align-items: center;
gap: 16px;
color: ${({ theme }) => theme.colors.greyTextColor};
font-size:  ${props => props.theme.fontSizes.xs};
letter-spacing: 0.48px;
`