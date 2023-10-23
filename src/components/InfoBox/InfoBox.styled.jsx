import styled from "styled-components";
import { selectTablet } from '../../utils/mediaRequest';

export const InfoBoxWrapper = styled.div`
    max-width: 280px;
    min-height: 152px;
    background: linear-gradient(118deg, #1D346A 2.84%, #031634 67.28%);
    border-radius: 30px;
    padding: 29px 25px;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.whiteTextColor};
    position: relative;
    z-index: 1;
    margin: 0 auto;
    
    :last-child {
        font-size: ${({ theme }) => theme.fontSizes.xs};
    }

    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 16px solid #1D346A;
        background-image: linear-gradient(118deg, #1D346A 2.84%, #031634 67.28%);
        top: -15px;
        left: 70px;

        @media ${selectTablet} {
            left: 46px;
        
        }
    }

    @media ${selectTablet} {
            min-width: 288px;
        
    }
`

export const TextInfoBox = styled.p`
    margin-bottom: 20px;
`