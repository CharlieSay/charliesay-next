import type { NextPage } from "next";
import Image from "next/image";
import profilePicture from "../public/img/profile-pic.webp";
import { AboutHero, BioDescription, HeroHello } from "../styles/about.styles";
import { Description, TitleH1 } from "../styles/common.styles";
import { NvContainerFixedWide } from "../styles/containers.styles";

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
          width={250}
          height={250}
          layout={"intrinsic"}
        />
        <HeroHello>
          <Description>👋 I&apos;m Charlie Say</Description>
        </HeroHello>
      </AboutHero>
      <BioDescription>
        I&apos;m a 25 years old full-stack developer from <span>MCR, UK</span>{" "}
        🐝
        <br />
        and have been a developer since September 2017! (5 Years 😲)
      </BioDescription>
      <BioDescription>
        Software for me started out as an apprentice java dev, but as time went
        on I started to love doing consumer facing front-end work coming from
        the creative industry. So I slowly switched to full-stack development.
        <br /> <br />
        <span>HTML, CSS, JS, Java, React, GraphQL, NextJS, Gatsby</span> to name
        a few - those are my jam.
      </BioDescription>
    </NvContainerFixedWide>
  );
};

export default About;
