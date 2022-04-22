import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Container, Footer } from "../styles/common.styles";
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
    <Container>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Head>
          <title>Charlie Say</title>
          <meta
            name="description"
            content="Im a full stack Java dev from Manchester UK"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <Footer>
          <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            Powered by Next JS & Big Brains
          </Link>
        </Footer>
      </ThemeProvider>
    </Container>
  );
}

export default MyApp;
