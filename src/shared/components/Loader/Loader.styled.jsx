import styled, { keyframes } from "styled-components";

const rotate = keyframes`
25% {
    transform: scale(0);
        stroke: #F2F5FC;
}

50% {
    transform: scale(1);
        stroke: #FF751D;
}

75% {
    transform: scale(0);
        stroke: #F2F5FC;
}

100% {
    transform: scale(1);
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
  animation: ${rotate} 3s linear infinite;
  top: 20%;
  left: 47%;
`;
