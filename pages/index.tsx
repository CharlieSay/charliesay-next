import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardH2,
  CardP,
  Code,
  Description,
  Grid,
  Main,
  TitleH1,
} from "../styles/common.styles";

const HelloArray = [
  "Hello",
  "Bonjour",
  "Hola!",
  "Guten tag",
  "Hallo",
  "Namastē",
  "Salam",
];

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * HelloArray.length);
    setName(HelloArray[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <Main>
      <TitleH1>{name} 👋</TitleH1>
      <TitleH1>
        I&apos;m <Link href="/">Charlie Say.</Link>
      </TitleH1>

      <Description>I&apos;m a full-stack dev from Manchester, UK</Description>
      <Code>(maybe minus some devops parts 😬)</Code>

      <Grid>
        <Card href="/tutorials">
          <CardH2>Tutorials &rarr;</CardH2>
          <CardP>
            Find in-depth information about Next.js features and API.
          </CardP>
        </Card>
        <Card href="/uses">
          <CardH2>Uses &rarr;</CardH2>
          <CardP>What theme, what font, what settings?!</CardP>
        </Card>
        <Card href="/snippets">
          <CardH2>Snippets &rarr;</CardH2>
          <CardP>Handy little snippets for you to pop into your projects</CardP>
        </Card>
        <Card href="/blog">
          <CardH2>Blog &rarr;</CardH2>
          <CardP>Read about some ramblings</CardP>
        </Card>
        <Card href="/contact-me">
          <CardH2>Contact &rarr;</CardH2>
          <CardP>Get in touch with me!</CardP>
        </Card>
        <Card href="/history">
          <CardH2>Work History &rarr;</CardH2>
          <CardP>AKA My CV</CardP>
        </Card>
      </Grid>
    </Main>
  );
};

export default Home;
