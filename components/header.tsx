import Link from "next/link";
import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { RoughNotation } from "react-rough-notation";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import {
  HamburgerMenuSection,
  Header,
  HeaderGroup,
  HeaderLinkA,
  LogoStyle,
  MobileMenuOverlay,
  MobileMenuOverlayContent,
  NavWrapper,
  ThemeSwitchContainer,
  UL,
  ULLI,
} from "../styles/header.styles";

const WebHeader = (props: HeaderPropsAsClass) => {
  const { headerLinks, themeSwitchHook, isLightMode } = props;
  const [showNav, setShowNav] = useState(false);

  return (
    <Header>
      <NavWrapper>
        <HeaderGroup>
          <RoughNotation color={"#faae2b"} type="underline" show={true}>
            <LogoStyle href="/">CharlieSay</LogoStyle>
          </RoughNotation>
          <UL>
            {headerLinks.map((link) => (
              <ULLI mobileNav={false} key={link.name}>
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
          <HamburgerMenuSection>
            <HamburgerMenu
              isOpen={showNav}
              menuClicked={() => setShowNav(!showNav)}
              width={22}
              height={15}
              strokeWidth={2}
              rotate={0}
              color={isLightMode ? "#faae2b" : "#fffffe"}
              animationDuration={0.5}
            />
          </HamburgerMenuSection>
          {showNav && (
            <MobileMenuOverlay>
              <MobileMenuOverlayContent>
                {headerLinks.map((link) => (
                  <ULLI mobileNav={true} key={link.name}>
                    <HeaderLinkA href={link.href}>{link.name}</HeaderLinkA>
                  </ULLI>
                ))}
              </MobileMenuOverlayContent>
            </MobileMenuOverlay>
          )}
          <ThemeSwitchContainer>
            <DarkModeSwitch
              checked={isLightMode}
              onChange={() => themeSwitchHook()}
              size={30}
              moonColor={"#00473e"}
              sunColor={"#fffffe"}
            />
          </ThemeSwitchContainer>
        </HeaderGroup>
      </NavWrapper>
    </Header>
  );
};

interface HeaderPropsAsClass {
  headerLinks: Array<HeaderLink>;
  themeSwitchHook: () => void;
  isLightMode: boolean;
}

interface HeaderLink {
  name: string;
  href: string;
  external?: boolean;
  isActive?: boolean;
}

export default WebHeader;
