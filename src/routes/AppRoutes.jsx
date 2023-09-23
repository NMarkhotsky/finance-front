import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ReportPage = lazy(() => import('../pages/ReportPage/ReportPage'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/login" component={<HomePage />} />
          }
        />

        <Route
          path="/report"
          element={
            <PrivateRoute redirectTo="/login" component={<ReportPage />} />
          }
        />

        <Route
          path="/login"
          element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
        />

        <Route
          path="/register"
          element={<PublicRoute redirectTo="/" component={<RegisterPage />} />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
