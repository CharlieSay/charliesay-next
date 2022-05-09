import Link from "next/link";
import React, { useState } from "react";
import {
  Header,
  UL,
  ULLI,
  HeaderLinkA,
  LogoStyle,
  NavWrapper,
  HeaderGroup,
  HamburgerMenuSection,
  MobileMenuOverlay,
  MobileMenuOverlayContent,
  HamburgerMenuPadding,
} from "./header.styles";
import { RoughNotation } from "react-rough-notation";
import HamburgerMenu from "react-hamburger-menu";
import { DarkModeSwitch } from "react-toggle-dark-mode";

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
              color="#00473e"
              animationDuration={0.5}
            />
          </HamburgerMenuSection>
          {showNav && (
            <MobileMenuOverlay>
              <MobileMenuOverlayContent>
                <HamburgerMenuPadding>
                  <HamburgerMenu
                    isOpen={showNav}
                    menuClicked={() => setShowNav(!showNav)}
                    width={22}
                    height={15}
                    strokeWidth={3}
                    rotate={0}
                    color="#faae2b"
                  />
                </HamburgerMenuPadding>
                {headerLinks.map((link) => (
                  <ULLI mobileNav={true} key={link.name}>
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
              </MobileMenuOverlayContent>
            </MobileMenuOverlay>
          )}
          <DarkModeSwitch
            checked={isLightMode}
            onChange={() => themeSwitchHook(!isLightMode)}
            size={30}
            moonColor={"#00473e"}
            sunColor={"#fffffe"}
          />
        </HeaderGroup>
      </NavWrapper>
    </Header>
  );
};

interface HeaderPropsAsClass {
  headerLinks: Array<HeaderLink>;
  themeSwitchHook: React.Dispatch<React.SetStateAction<any>>;
  isLightMode: boolean;
}

interface HeaderLink {
  name: string;
  href: string;
  external?: boolean;
  isActive?: boolean;
}

export default WebHeader;
