import { Header } from '../Header/Header';
import { Main } from './SharedLayout.styled';
import AppRoutes from '../../routes/AppRoutes';
import { Background } from '../../shared/components/Background/Background';
import { CookieModalBanner } from '../CookieModalBanner/CookieModalBanner';

export const SharedLayout = () => {
  return (
    <>
      <Background />
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      <CookieModalBanner/>
    </>
  );
};
