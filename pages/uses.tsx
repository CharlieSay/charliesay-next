import type { NextPage } from "next";
import {
  TitleH1,
  CopyLite,
  TitleH2,
  UL,
  LI,
  Copy,
} from "../styles/common.styles";
import { NvContainerFixedWide } from "../styles/containers.styles";
import { ALink, ULLI } from "../styles/header.styles";
import usesData from "../data/uses.json";

const Uses: NextPage = () => {
  return (
    <NvContainerFixedWide>
      <TitleH1>Uses</TitleH1>
      <Copy>
        This may be out of date, but you can always find out what loads of other
        developers use over at
        <ALink href={"https://www.uses.tech"}> uses.tech</ALink>
      </Copy>
      <Copy>
        If you&apos;re also looking for configs like VS Code and Intellij they
        can be found in my
        <ALink href="https://www.github.com/CharlieSay/config-repo">
          {" "}
          config repo
        </ALink>
      </Copy>
      {usesData.map((section) => (
        <section key={section.sectionTitle}>
          <TitleH2>{section.sectionTitle}</TitleH2>
          <UL>
            {section.items.map((item) => (
              <LI key={item.item}>
                <img
                  src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${item.href}`}
                />
                <ALink href={item.href}>
                  <Copy style={{ margin: "0" }}>{item.item}</Copy>
                  {item.optionalCopy && (
                    <CopyLite style={{ margin: "0" }}>
                      {item.optionalCopy}
                    </CopyLite>
                  )}
                </ALink>
              </LI>
            ))}
          </UL>
        </section>
      ))}
    </NvContainerFixedWide>
  );
};

export default Uses;
