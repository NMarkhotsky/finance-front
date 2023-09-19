import { Input } from './AuthInput.styled';

// eslint-disable-next-line react/prop-types
export const AuthInput = ({ type, placeholder, props }) => {
  return <Input type={type} placeholder={placeholder} {...props} />;
};
