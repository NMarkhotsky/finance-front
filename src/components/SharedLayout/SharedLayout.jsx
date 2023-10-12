import { useDispatch } from 'react-redux';
import { Header } from '../Header/Header';
import { Main } from './SharedLayout.styled';
import { logout } from '../../redux/auth/operations';
import AppRoutes from '../../routes/AppRoutes';
import { Background } from '../../shared/components/Background/Background';

export const SharedLayout = () => {
  const dispatch = useDispatch();

  const onsubmit = async () => {
    dispatch(logout());
  };

  return (
    <>
      <Header />
      <Main>
        <Background />
        <AppRoutes />
        <button onClick={onsubmit}>Log Out</button>
      </Main>
    </>
  );
};
