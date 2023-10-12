import { Header } from '../Header/Header';
import { Main } from './SharedLayout.styled';
import AppRoutes from '../../routes/AppRoutes';
import { Background } from '../../shared/components/Background/Background';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Background />
        <AppRoutes />
      </Main>
    </>
  );
};
