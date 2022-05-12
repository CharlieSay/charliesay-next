import Link from "next/link";
import React from "react";
import { ALink, CopyLite, Grid } from "../styles/common.styles";
import { Footer, LegalCopy } from "../styles/footer.styles";

const FooterComponent = () => {
  return (
    <Footer>
      <ALink href="https://nextjs.org/">Powered by Next JS</ALink>
      <CopyLite> Oh and lots of coffee ☕</CopyLite>
      <Grid>
        <Link href="/terms" passHref={true}>
          <LegalCopy>Terms</LegalCopy>
        </Link>
        <Link href="/privacy-policy" passHref={true}>
          <LegalCopy>Privacy Policy</LegalCopy>
        </Link>
      </Grid>
    </Footer>
  );
};

export default FooterComponent;
