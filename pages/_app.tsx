import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import header from "../data/nav-data.json";
import { ALink, CopyLite, Footer } from "../styles/common.styles";
import {
  BackgroundColour,
  ContainerConstrained,
} from "../styles/containers.styles";
import WebHeader from "../components/header";
import { darkTheme, lightTheme, ThemeType } from "../styles/theme.styles";
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
    transition: all 0.25s linear;
    & ::selection {
    background: ${(props) => props.theme.illustration.secondary};
    }
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
          <title>Charlie Say | Full-stack developer</title>
          <meta name="title" content="Charlie Say | Full-stack developer" />
          <meta
            name="description"
            content="A full-stack developer from Manchester UK, who wants to help you become the best developer in the software world."
          />
          <meta name="keywords" content="developer, full stack, react, java" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="@charliesay_" />
          <link
            rel="icon"
            href={theme === "light" ? "/favicon.ico" : "/favicon-dark.ico"}
          />
        </Head>
        <WebHeader
          isLightMode={theme === "light" ? true : false}
          // @ts-ignore
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
