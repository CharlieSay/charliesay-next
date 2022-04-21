import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
