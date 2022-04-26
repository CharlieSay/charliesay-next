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

const indexPageCards = [
  {
    name: "Tutorials",
    href: "/tutorials",
    copy: "Handy how-to's in the big dev world",
  },
  {
    name: "Uses",
    href: "/uses",
    copy: "What theme, what font, what settings?!",
  },
  {
    name: "Snippets",
    href: "//twitter.com/charliesay_",
    copy: "Handy little snippets for you to pop into your projects",
  },
  {
    name: "Blog",
    href: "/blog",
    copy: "Read about some ramblings",
  },
  {
    name: "Contact me",
    href: "/contact",
    copy: "Get in touch with me!",
  },
  {
    name: "History",
    href: "/history",
    copy: "AKA My CV",
  },
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
        {indexPageCards.map((card, i) => (
          <Card key={i} href={card.href}>
            <CardH2>{card.name} &rarr;</CardH2>
            <CardP>{card.copy}</CardP>
          </Card>
        ))}
      </Grid>
    </Main>
  );
};

export default Home;
