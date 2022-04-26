import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Footer } from "../styles/common.styles";
import { ContainerConstrained } from "../styles/containers.styles";
import { DesktopHeader } from "../styles/header";
import { lightTheme } from "../styles/theme";

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

const header = [
  {
    displayText: "Uses",
    url: "/uses",
    subHeaders: [
      {
        displayText: "Worship loops",
        url: "/search?category=worship_loops",
      },
      {
        displayText: "Social graphics",
        url: "/search?category=social_graphics",
      },
      {
        displayText: "Countdowns",
        url: "/search?category=countdowns",
      },
      {
        displayText: "Sermon graphics",
        url: "/search?category=sermon_graphics",
      },
      {
        displayText: "Lyric videos",
        url: "/search?category=lyric_videos",
      },
      {
        displayText: "Stock Footage",
        url: "/search?category=stock",
      },
    ],
  },
  {
    displayText: "Blog",
    url: "/blog",
    subHeaders: [
      {
        displayText: "About us",
        url: "/about-us",
      },
      {
        displayText: "The team",
        url: "/the-team",
      },
      {
        displayText: "Blog",
        url: "//dev.to/charliesay",
      },
    ],
  },
  {
    displayText: "Contact",
    url: "/contact",
    subHeaders: [
      {
        displayText: "FAQ's",
        url: "/help",
      },
      {
        displayText: "Contact us",
        url: "/help#contact-us",
      },
      {
        displayText: "Instagram",
        url: "//www.instagram.com/newvision.uk",
      },
    ],
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
        <DesktopHeader headerLinks={header} />
        <ContainerConstrained>
          <Component {...pageProps} />
        </ContainerConstrained>
        <Footer>
          <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            Powered by Next JS
          </Link>
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
