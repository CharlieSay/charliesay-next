import type { NextPage } from "next";
import Image from "next/image";
import { Description, TitleH1, TitleH3 } from "../styles/common.styles";
import profilePicture from "../public/about-pic.webp";
import { NvContainerFixedWide } from "../styles/containers.styles";
import { AboutHero, HeroHello } from "../styles/about.styles";

const About: NextPage = () => {
  return (
    <NvContainerFixedWide>
      <TitleH1>About</TitleH1>
      <AboutHero>
        <Image
          src={profilePicture}
          alt={
            "A semi professional picture of Charlie Say he looks like an idiot"
          }
          width={270}
          height={250}
          layout={"fixed"}
        />
        <HeroHello>
          <Description>👋 I&apos;m Charlie Say</Description>
        </HeroHello>
      </AboutHero>
      <TitleH3>World&apos;s smallest memoir X</TitleH3>
      <Description>
        And I&apos;m a developer from Manchester, UK 🐝
        <br />
        I&apos;m 25 years old and have been a developer since September 2017! (5
        Years 😲)
      </Description>
      <Description>
        Software for me started out as an Apprentice Java dev, but as time went
        on I started to love doing consumer facing front-end work coming from
        the creative industry. So I switched to full-stack development. HTML,
        CSS, JS, Java, React, GraphQL, NextJS, Gatsby - those are my jam.
      </Description>
    </NvContainerFixedWide>
  );
};

export default About;
