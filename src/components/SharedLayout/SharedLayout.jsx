import { Header } from '../Header/Header';
import { Main } from './SharedLayout.styled';
import AppRoutes from '../../routes/AppRoutes';
import { Background } from '../../shared/components/Background/Background';

export const SharedLayout = () => {
  return (
    <>
      <Background />
      <Header />
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
};
