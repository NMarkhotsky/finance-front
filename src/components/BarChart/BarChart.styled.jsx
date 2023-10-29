import styled from "styled-components";

export const SectionChart = styled.section`
margin: 0 auto;
border-radius: 30px;
box-shadow: ${({ theme }) => theme.boxShadowColor};
background-color: ${({ theme }) => theme.colors.mainBgdColor};
`

export const ContainerChart = styled.div`
    /* padding: 22px 138px 20px; */

    @media (max-width: 480px) {
    max-width: 100%;
}

@media (min-width: 481px) and (max-width: 768px) {
    max-width: 80%;
    height: 400px;
    margin: 0 auto;
}

@media (min-width: 769px) {
    /* max-width: 60%; */
     /* width: 758px; */
    padding: 22px 138px 20px; 
}
`
