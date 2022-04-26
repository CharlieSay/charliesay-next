import type { NextPage } from "next";
import { TitleH1, CardP } from "../styles/common.styles";

const Uses: NextPage = () => {
  return (
    <>
      <TitleH1>Uses</TitleH1>
      <CardP>
        This may be out of date, but you can always find out what loads of other
        developers use over at <a href={"//uses.tech"}>uses.tech</a>
      </CardP>
      <TitleH1>Editors</TitleH1>
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
