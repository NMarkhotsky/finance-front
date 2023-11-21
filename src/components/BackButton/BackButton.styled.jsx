import styled from "styled-components";
import { Link } from 'react-router-dom';
import { selectDesktop } from "../../utils";

export const Button = styled(Link)`
display: flex;
align-items: center;
gap: 5px;
color: ${({ theme }) => theme.colors.greyTextColor};
font-size:  ${props => props.theme.fontSizes.xs};
letter-spacing: 0.48px;

@media ${selectDesktop} {
    gap: 20px;
}
`

export const ButtonText = styled.span`
    @media screen and (max-width: 767px) {
        display: none;
    }
    padding-top: 2px;
`