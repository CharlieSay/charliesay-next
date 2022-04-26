import type { NextPage } from "next";
import { TitleH1 } from "../styles/common.styles";

const History: NextPage = () => {
  return (
    <>
      <TitleH1> History</TitleH1>
      <li style={{ listStyle: "none" }}>
        <ul>ITV - Core Software Engineer - March 2022 - present</ul>
        <ul>
          MoneySuperMarket Group - Java Developer January 2021 - March 2022
        </ul>
        <ul>AutoTrader UK - Java Developer March 2019 - Jan 2021</ul>
        <ul>
          AutoTrader UK - Apprentice Java Developer - September 2017 - March
          2019
        </ul>
      </li>
    </>
  );
};

export default History;
