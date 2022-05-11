import styled from "styled-components";

const dimensions = {
  maxWidth: "1200px",
  minWidth: "320px",
  contentWidth: "1024px",
  mobileMax: "860px",
  baseUnit: "8px",
};

export const NavWrapper = styled.nav`
  margin: 0 auto;
  max-width: ${dimensions.maxWidth};
`;

export const HeaderGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 210;
  padding: 16px 32px;

  @media (max-width: ${dimensions.mobileMax}) {
    justify-content: space-around;
    width: 100%;
  }
`;

export const HamburgerMenuSection = styled.section`
  display: none;
  @media (max-width: ${dimensions.mobileMax}) {
    display: inline;
  }
`;

export const MobileMenuOverlay = styled.nav`
  height: 90%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 10%;
  background-color: ${(props) =>
    props.theme.elements.background}; /* Black fallback color */
  overflow-x: hidden; /* Disable horizontal scroll */
`;

export const MobileMenuOverlayContent = styled.section`
  position: relative;
  top: 10%;
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ULLI = styled.li<{ mobileNav: boolean }>`
  display: ${(props) => (props.mobileNav ? "none" : "inline")};
  @media (max-width: ${dimensions.mobileMax}) {
    display: ${(props) => (props.mobileNav ? "inline" : "none")};
    flex-direction: column;
    height: 100%;
  }
`;

export const ThemeSwitchContainer = styled.section`
  padding-left: 16px;
`;

export const HeaderLinkA = styled.a`
  color: ${(props) => props.theme.elements.headline};
  cursor: pointer;
  margin-left: 1.2rem;
  font-weight: 700;
  &:hover {
    color: ${(props) => props.theme.elements.paragraph};
  }
`;

export const LogoStyle = styled.a`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${(props) => props.theme.elements.headline};
`;

export const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  @media (max-width: ${dimensions.mobileMax}) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.elements.background};
`;
