import type { NextPage } from "next";
import Link from "next/link";
import { LinkBlue, TitleH1 } from "../styles/common.styles";

const ContactMe: NextPage = () => {
  return (
    <>
      <TitleH1>ContactMe</TitleH1>
      <p>
        <span>What fonts do you use?</span> head on over{" "}
        <LinkBlue>
          <Link href="/uses">here to find out </Link>
        </LinkBlue>
      </p>
      <p>
        <span>Want me to do some work?</span> drop me an
        <LinkBlue>
          <a href="mailto:charlie@talesoft.digital?subject=Lets work together!">
            {" "}
            email
          </a>
        </LinkBlue>
      </p>
    </>
  );
};

export default ContactMe;
