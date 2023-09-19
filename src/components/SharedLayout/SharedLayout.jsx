import { LoginForm } from '../Auth/LoginForm/LoginForm';
import { RegisterForm } from '../Auth/RegisterForm/RegisterForm';
import { Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Main>
        <LoginForm />
        <RegisterForm />
      </Main>
    </>
  );
};
