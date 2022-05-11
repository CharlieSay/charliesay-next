import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { RoughNotation } from "react-rough-notation";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import {
  LinkBlue,
  Main,
  RoughNotationDescription,
  TitleH1,
  TwitterFeedPadding,
} from "../styles/common.styles";
import { MiddleAlign } from "../styles/containers.styles";

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
  const [name, setName] = useState(HelloArray[0]);
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
      <TitleH1>
        <MiddleAlign>
          {name}
          <LinkBlue>I&apos;m Charlie Say</LinkBlue>
        </MiddleAlign>
      </TitleH1>
      <RoughNotationDescription>
        <RoughNotation
          color={"#faae2b"}
          type="highlight"
          show={true}
          padding={15}
        >
          I want to help you become the best you in the software space.
        </RoughNotation>
      </RoughNotationDescription>
      <TwitterFeedPadding>
        <TwitterTimelineEmbed
          placeholder={<Skeleton count={5} height={400} width={300} />}
          sourceType="profile"
          screenName="charliesay_"
          options={{ height: 400 }}
        />
      </TwitterFeedPadding>
    </Main>
  );
};

export default Home;
