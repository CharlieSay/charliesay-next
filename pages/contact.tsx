import type { NextPage } from "next";
import Link from "next/link";
import {
  ALink,
  Copy,
  Description,
  TitleH1,
  TitleH2,
} from "../styles/common.styles";
import { NvContainerFixedWide } from "../styles/containers.styles";

const ContactMe: NextPage = () => {
  return (
    <NvContainerFixedWide>
      <TitleH1>Get in touch!</TitleH1>
      <Copy>
        What fonts do you use? head on over{" "}
        <Link href={"/uses"} passHref={true}>
          <ALink>here to find out </ALink>
        </Link>
      </Copy>
      <Copy>
        Want me to do some work? drop me an{" "}
        <ALink href="mailto:charlie@talesoft.digital?subject=Lets work together!">
          email
        </ALink>
      </Copy>
    </NvContainerFixedWide>
  );
};

export default ContactMe;
