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
        I use HTML, CSS and JavaScript. Though constantly changing, my focus
        right now is React.js, Node, Express, Lambda, Gatsby and Next.js
      </Description>
    </NvContainerFixedWide>
  );
};

export default About;
