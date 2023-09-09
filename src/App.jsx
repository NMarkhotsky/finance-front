import { ThemeProvider } from 'styled-components';
import { fonts } from './components/constants/fonts';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { useFont, useTheme } from './hooks';
import { lightTheme, darkTheme } from './theme/theme';

function App() {
  const fontsLoaded = useFont(fonts);
  const currentTheme = useTheme();

  return fontsLoaded ? (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <SharedLayout />
    </ThemeProvider>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
