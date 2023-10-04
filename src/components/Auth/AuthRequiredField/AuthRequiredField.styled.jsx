import styled from 'styled-components';

export const Field = styled.span`
  position: absolute;
  bottom: -15px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.red};
`;
