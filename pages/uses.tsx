import type { NextPage } from "next";
import Link from "next/link";
import { TitleH1, CardP, LinkBlue } from "../styles/common.styles";

const Uses: NextPage = () => {
  return (
    <>
      <TitleH1>Uses</TitleH1>
      <CardP>
        This may be out of date, but you can always find out what loads of other
        developers use over at
        <LinkBlue>
          <a href={"https://www.uses.tech"}> uses.tech</a>
        </LinkBlue>
      </CardP>
      <CardP>
        If you&apos;re also looking for configs like VS Code and Intellij they
        can be found in my
        <LinkBlue>
          <a href="https://www.github.com/CharlieSay/config-repo">
            {" "}
            config repo
          </a>
        </LinkBlue>
      </CardP>
      <TitleH1>Editors (IDEs)</TitleH1>
      <CardP>IntelliJ Ultimate, Visual Studio Code</CardP>
      <TitleH1>Apps</TitleH1>
      <CardP>ToDoist, Notion, Slack</CardP>
      <TitleH1>Desk Setup</TitleH1>
      <CardP>Flexispot standing desk, 2x LG 27UL650, Razer DeathAdder</CardP>
      <TitleH1>Productivity</TitleH1>
      <CardP>Google Suite</CardP>
      <TitleH1>Other Things</TitleH1>
    </>
  );
};

export default Uses;
