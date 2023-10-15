import styled from "styled-components";

export const SectionChart = styled.section`
width: 1034px;
margin: 40px auto 0;
/* margin: 0 auto; */
border-radius: 30px;
box-shadow: ${({ theme }) => theme.boxShadowColor};
background-color: ${({ theme }) => theme.colors.mainBgdColor};
`

export const ContainerChart = styled.div`
    /* width: 758px; */
    padding: 22px 138px 20px;
    margin: 0 auto;
`
