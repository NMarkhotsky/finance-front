import styled from "styled-components";
import { selectTablet } from "../../utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 40px;

  @media screen and (max-width: 480px) {
  gap: 43px;   
  }

  @media ${selectTablet} {
    justify-content: space-between;
    flex-direction: row;
  }
`;
