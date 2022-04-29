import type { NextPage } from "next";
import Link from "next/link";
import { LinkBlue, TitleH1 } from "../styles/common.styles";

const ContactMe: NextPage = () => {
  return (
    <>
      <TitleH1>ContactMe</TitleH1>
      <p style={{ display: "flex" }}>
        <span>What fonts do you use? head on over </span>
        <LinkBlue>
          <Link href="/uses">here to find out </Link>
        </LinkBlue>
      </p>
      <p style={{ display: "flex" }}>
        <span>Want me to do some work? drop me an </span>
        <LinkBlue>
          <a href="mailto:charlie@talesoft.digital?subject=Lets work together!">
            email
          </a>
        </LinkBlue>
      </p>
    </>
  );
};

export default ContactMe;
