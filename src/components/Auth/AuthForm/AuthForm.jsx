import { Form } from './AuthForm.styled';

// eslint-disable-next-line react/prop-types
export const AuthForm = ({ children, onSubmit }) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};
