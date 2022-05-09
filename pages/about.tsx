import type { NextPage } from "next";
import Image from "next/image";
import { Description, TitleH2Center } from "../styles/common.styles";
import profilePicture from "../public/about-pic.webp";
import { NvContainerFixedWide } from "../styles/containers.styles";
import { AboutHero, HeroHello } from "../styles/about.styles";

const About: NextPage = () => {
  return (
    <NvContainerFixedWide>
      <TitleH2Center>About</TitleH2Center>

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
      <Description>
        Use to be a pure java-dev, but being a creative person I switched to
        full-stack development. HTML, CSS, JS, Java, React, GraphQL, NextJS,
        Gatsby - those are my jam.
      </Description>
    </NvContainerFixedWide>
  );
};

export default About;
