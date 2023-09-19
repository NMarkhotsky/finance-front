import { Button } from './AuthButton.styled';

// eslint-disable-next-line react/prop-types
export const AuthButton = ({ children, type }) => {
  return <Button type={type}>{children}</Button>;
};
