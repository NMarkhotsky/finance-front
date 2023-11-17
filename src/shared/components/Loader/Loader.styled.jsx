import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
        stroke: #F2F5FC;
    }
    to {
        transform: rotate(360deg);
        stroke: #FF751D;
    }
`;

export const ImageBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 999;
`;

export const ImageLoader = styled.div`
  position: absolute;
  animation: ${rotate} 2s linear infinite;
  top: 20%;
  left: 47%;
`;
