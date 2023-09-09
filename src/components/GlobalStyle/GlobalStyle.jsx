import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  font-family: ${({ theme }) => theme.fonts.regular}, sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.mainTextColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
}

a {
  text-decoration: none;
}

button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
`;
