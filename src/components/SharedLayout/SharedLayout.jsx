import { useDispatch } from 'react-redux';
import { LoginForm } from '../Auth/LoginForm/LoginForm';
import { Header } from '../Header/Header';
import { Main } from './SharedLayout.styled';
import { logout } from '../../redux/auth/operations';
import { RegisterForm } from '../Auth/RegisterForm/RegisterForm';
import AppRoutes from '../../routes/AppRoutes';

export const SharedLayout = () => {
  const dispatch = useDispatch();

  const onsubmit = async () => {
    dispatch(logout());
  };

  return (
    <>
      <Header />
      <Main>
        <AppRoutes />
        <button onClick={onsubmit}>Log Out</button>
      </Main>
    </>
  );
};
