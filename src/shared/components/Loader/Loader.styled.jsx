import styled, { keyframes } from "styled-components";
import { Icon } from "../../../shared/components/Icon/Icon";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

// export const ImageBox = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow-y: auto;
//   z-index: 999;
// `;

export const ImageLoader = styled(Icon)`
  width: 40px;
  height: 40px;
  position: absolute;
  animation: ${rotate} 2s linear infinite;
  stroke: ${({ theme }) => theme.colors.orange};
  top: 20%;
  left: 47%;
`;
