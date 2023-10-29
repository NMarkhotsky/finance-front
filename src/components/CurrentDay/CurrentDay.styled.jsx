import styled from "styled-components";

export const ContainerCurrentDay = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const TextDay = styled.p`
color: ${({ theme }) => theme.colors.mainTextColor};
font-size: ${props => props.theme.fontSizes.xs};
font-family: ${props => props.theme.fonts.bold};
letter-spacing: 0.48px;
text-transform: uppercase;
`