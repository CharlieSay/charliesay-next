import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Footer } from "../styles/common.styles";
import {
  BackgroundColour,
  ContainerConstrained,
} from "../styles/containers.styles";
import WebHeader from "../styles/header";
import { darkTheme, lightTheme, ThemeType } from "../styles/theme.styles";
import header from "../data/nav-data.json";
import { HeaderLinkA } from "../styles/header.styles";
import { useState } from "react";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @font-face {
        font-family: 'proxima-nova';
        font-style: normal;
        font-weight: normal;
        src: url("/proxima-nova-font.otf") format('otf');
    }

  html,
  body {
    background-color: ${({ theme }) => theme.elements.background};
    font-size: 18px;
    font-family: 'proxima-nova', Arial, sans-serif;
    margin: 0;
    line-height: 1.15;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [lightMode, setLightMode] = useState(true);
  return (
    <>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Head>
          <title>Charlie Say | Full-stack dev</title>
          <meta
            name="description"
            content="Im a full stack Java dev from Manchester UK"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <WebHeader
          isLightMode={lightMode}
          themeSwitchHook={setLightMode}
          headerLinks={header}
        />
        <BackgroundColour>
          <ContainerConstrained>
            <Component {...pageProps} />
          </ContainerConstrained>
        </BackgroundColour>
        <Footer>
          <HeaderLinkA href="https://nextjs.org/">
            Powered by Next JS
          </HeaderLinkA>
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
