import styled from "styled-components"

export const DeleteBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    text-align: center;
    border-radius: 50%;
        &:hover {
            background-color: ${({ theme }) => theme.colors.btnBgdMainColor};
            transition: ${({theme}) => theme.transitionHover};
        }
`