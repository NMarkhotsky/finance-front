import { styled } from "styled-components";

export const ContainerToast = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 20px 10px;
  border-radius: 10px;
  border: 3px double gray;
  background-color: #f8f8ff;
`;
export const ContainerToastSuccess = styled(ContainerToast)`
  border-color: green;

  p {
    color: green;
  }
`;

export const ContainerToastError = styled(ContainerToast)`
  border-color: red;

  p {
    color: red;
  }
`;

export const Message = styled.p`
  color: #000;
  font-size: 20px;
`;
