import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { fonts } from './constants';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { useFont, useTheme } from './hooks';
import { lightTheme, darkTheme } from './theme/theme';
import { googleAuth } from './redux/auth/authSlice';
import { fetchCurrentUser } from './redux/auth/operations';
import { Loader } from './shared/components/Loader/Loader';

function App() {
  const fontsLoaded = useFont(fonts);
  const currentTheme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      dispatch(googleAuth(token));
      setSearchParams('');
      dispatch(fetchCurrentUser());
      navigation('/');
    } else {
      dispatch(fetchCurrentUser());
      return;
    }
  }, [dispatch, navigation, setSearchParams, token]);

  return fontsLoaded ? (
      <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <SharedLayout />
        <Toaster/>
      </ThemeProvider>
  ) : (
    <Loader/>
  );
}

export default App;
