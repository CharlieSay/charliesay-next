import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ALink, CopyLite, Footer } from "../styles/common.styles";
import {
  BackgroundColour,
  ContainerConstrained,
} from "../styles/containers.styles";
import WebHeader from "../styles/header";
import { darkTheme, lightTheme, ThemeType } from "../styles/theme.styles";
import header from "../data/nav-data.json";
import { useDarkMode } from "../utils/theme";

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
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
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
          isLightMode={theme === "light" ? true : false}
          themeSwitchHook={themeToggler}
          headerLinks={header}
        />
        <BackgroundColour>
          <ContainerConstrained>
            <Component {...pageProps} />
          </ContainerConstrained>
        </BackgroundColour>
        <Footer>
          <ALink href="https://nextjs.org/">Powered by Next JS</ALink>
          <CopyLite> Oh and lots of coffee ☕</CopyLite>
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
