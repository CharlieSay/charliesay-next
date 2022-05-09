import type { NextPage } from "next";
import Link from "next/link";
import { TitleH1 } from "../styles/common.styles";
import { ALink } from "../styles/header.styles";

const ContactMe: NextPage = () => {
  return (
    <>
      <TitleH1>Contact Me</TitleH1>
      <p>
        <span>What fonts do you use? head on over </span>
        <Link href={"/uses"} passHref={false}>
          <ALink>here to find out </ALink>
        </Link>
      </p>
      <p>
        <span>Want me to do some work? drop me an </span>
        <ALink href="mailto:charlie@talesoft.digital?subject=Lets work together!">
          email
        </ALink>
      </p>
    </>
  );
};

export default ContactMe;
