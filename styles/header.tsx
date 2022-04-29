import Link from "next/link";
import React from "react";
import Headroom from "react-headroom";
import {
  Header,
  HeaderContainer,
  UL,
  ULLI,
  HeaderLinkA,
  Text,
  Accent,
  StyledLink,
  NavWrapper,
  HeaderGroup,
} from "./header.styles";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const WebHeader = (props: HeaderPropsAsClass) => {
  const { headerLinks } = props;

  return (
    <Headroom
      style={{
        boxShadow: "1px 1px 1px rgba(0,0,0,0.025)",
      }}
    >
      <Header>
        <HeaderContainer>
          <NavWrapper>
            <HeaderGroup>
              <div>
                <Text big={false}>
                  <RoughNotation color="#0072f4" type="underline" show={true}>
                    <StyledLink href="/">CharlieSay</StyledLink>
                  </RoughNotation>
                </Text>
              </div>
              <UL>
                {headerLinks.map((link) => (
                  <ULLI key={link.name}>
                    {!link.external && (
                      <Link href={link.href} passHref={link.external}>
                        <HeaderLinkA>{link.name}</HeaderLinkA>
                      </Link>
                    )}
                    {link.external && (
                      <HeaderLinkA href={link.href}>{link.name}</HeaderLinkA>
                    )}
                  </ULLI>
                ))}
              </UL>
            </HeaderGroup>
          </NavWrapper>
        </HeaderContainer>
      </Header>
    </Headroom>
  );
};

interface HeaderPropsAsClass {
  headerLinks: Array<HeaderLink>;
}

interface HeaderLink {
  name: string;
  href: string;
  external?: boolean;
  isActive?: boolean;
}

export default WebHeader;
