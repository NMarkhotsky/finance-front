import styled from "styled-components";
import { selectTablet, selectDesktop } from '../../utils/mediaRequest';


export const CalcContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    position: absolute;
`

export const CalcStyledForm = styled.form`
    width: 210px;
    background-color: #C7CCDC;
    padding: 10px 10px;
    font-size: 16px;
    position: absolute;
    top: 320px;
    /* right: 50%; */
    transform: translate(50%, 0);
    border-radius: 16px 0 16px 16px;
    box-shadow: 5px 10px 20px 0px rgba(170, 178, 197, 0.40);

    @media ${selectTablet} {
        top: 200px;
        right: 75px;
    }

    @media ${selectDesktop} {
        top: 150px;
        right: 350px;
    }    
`

export const CalcInput = styled.input`
    width: 100%;
    margin-bottom: 5px;
    padding: 4px;
    text-align: right;
    border-radius: 4px;
    border: 1px solid #F6F7FB;
    background-color: #F6F7FB;
`

export const CalcButtonList = styled.ul`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
`

export const CalcButtonItem = styled.li`

`

export const CalcButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: #F5F6FB;
    border: 1px solid #F5F6FB;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    color: #FF751D;
    box-shadow: 5px 10px 20px 0px rgba(170, 178, 197, 0.40);

`

export const ArrowBack = styled.span`
    max-height: 100%;
    padding: 8px 0;
    font-weight: 800;
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 5px;
    background-color: #FF751D;
    text-transform: uppercase;
    border-radius: 6px;
    box-shadow: 1px 2px 5px 0px rgba(255, 117, 29, 0.40);
    color: #F5F6FB;
    font-weight: 700;
    font-size: 14px;
`