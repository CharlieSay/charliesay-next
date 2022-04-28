import Link from "next/link";
import React from "react";
import Headroom from "react-headroom";
import {
  Header,
  HeaderContainer,
  FloatLeft,
  UL,
  ULLI,
  HeaderLinkA,
  Text,
  Accent,
  StyledLink,
  NavWrapper,
  HeaderGroup,
} from "./header.styles";

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
                  <StyledLink href="/">
                    Charlie<Accent>Say</Accent>
                  </StyledLink>
                </Text>
              </div>
              <UL>
                {headerLinks.map((link) => (
                  <ULLI key={link.displayText}>
                    <Link href={link.url}>
                      <HeaderLinkA>{link.displayText}</HeaderLinkA>
                    </Link>
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
  displayText: string;
  url: string;
  isActive?: boolean;
  isDivider?: boolean;
  subHeaders?: HeaderLink[];
}

export default WebHeader;
