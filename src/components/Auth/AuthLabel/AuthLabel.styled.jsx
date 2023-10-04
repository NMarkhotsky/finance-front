import styled from 'styled-components';

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 12px;

  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;
