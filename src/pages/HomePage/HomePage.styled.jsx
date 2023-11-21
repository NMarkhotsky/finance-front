import styled from "styled-components";
import { selectDesktop, selectTablet } from "../../utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 40px;

  @media screen and (max-width: 767px) {
  gap: 43px;   
  }

  @media ${selectTablet} {
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 60px;
  }

  @media ${selectDesktop} {
    margin-bottom: 8px;
  }
`;
