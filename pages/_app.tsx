import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Footer } from "../styles/common.styles";
import { ContainerConstrained } from "../styles/containers.styles";
import WebHeader from "../styles/header";
import { lightTheme } from "../styles/theme";
import header from "../data/nav-data.json";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-size: 18px;
    font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
    margin: 0;
    line-height: 1.6;
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
        <Head>
          <title>Charlie Say | Full-stack dev</title>
          <meta
            name="description"
            content="Im a full stack Java dev from Manchester UK"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <WebHeader headerLinks={header} />
        <ContainerConstrained>
          <Component {...pageProps} />
        </ContainerConstrained>
        <Footer>
          <Link href="https://nextjs.org/">Powered by Next JS</Link>
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
