import type { NextPage } from "next";
import { TitleH1, Description, TitleH2 } from "../styles/common.styles";
import { ALink } from "../styles/header.styles";

const Uses: NextPage = () => {
  return (
    <>
      <TitleH1>Uses</TitleH1>
      <Description>
        This may be out of date, but you can always find out what loads of other
        developers use over at
        <ALink href={"https://www.uses.tech"}> uses.tech</ALink>
      </Description>
      <Description>
        If you&apos;re also looking for configs like VS Code and Intellij they
        can be found in my
        <ALink href="https://www.github.com/CharlieSay/config-repo">
          {" "}
          config repo
        </ALink>
      </Description>
      <TitleH2>Editors (IDEs)</TitleH2>
      <Description>IntelliJ Ultimate, Visual Studio Code</Description>
      <TitleH2>Apps</TitleH2>
      <Description>ToDoist, Notion, Slack</Description>
      <TitleH2>Desk Setup</TitleH2>
      <Description>
        Flexispot standing desk, 2x LG 27UL650, Razer DeathAdder
      </Description>
      <TitleH2>Productivity</TitleH2>
      <Description>Google Suite</Description>
      <TitleH2>Other Things</TitleH2>
      <Description>
        Colour scheme pallets -
        <ALink href="https://www.happyhues.co/"> Happy Hues</ALink>
      </Description>
    </>
  );
};

export default Uses;
