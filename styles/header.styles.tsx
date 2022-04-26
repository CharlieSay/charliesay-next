import styled, { keyframes } from "styled-components";

const colours = {
  black: "#000000",
  white: "#ffffff",
  whiteDark: "#f0f0f0",
  whiteDarker: "#f4f1f1",
  blackDisabled: "#727272",
  beige: "#fff0e3",
  mint: "#a4f5d3",
  blue: "#003cd7",
  disabledBlue: "#5477d1",
  hoverBlue: "#0030ab",
  purple: "#E5D4F7",
};

const dimensions = {
  maxWidth: "1200px",
  minWidth: "320px",
  contentWidth: "1024px",
  mobileMax: "860px",
  baseUnit: "8px",
};

export const FloatLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ButtonBaseA = styled.a`
  font-size: 14px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  width: auto;
  padding: 11px 18px 10px;
  height: 40px;
  vertical-align: middle;
  text-align: center;
`;

export const BlueCTABtn = styled(ButtonBaseA)`
  color: ${colours.white};
  background: ${colours.blue};
  border-radius: 2px;
  :hover {
    background: ${colours.hoverBlue};
    color: ${colours.white};
  }
`;

export const Logo = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: "bold";
  font-size: 24px;
  margin: 0;
  color: ${colours.black};
  transition: 0.45s;
  padding-top: 20px;
  :hover {
    color: ${colours.blue};
  }
`;

export const HeaderContainer = styled.div`
  height: 60px;
  display: flex !important;
  position: relative !important;
  margin: 0 auto !important;
  padding-left: 80px !important;
  padding-right: 80px !important;
  z-index: 1 !important;
  justify-content: space-between;
  max-width: ${dimensions.maxWidth};
`;

export const DropdownAccount = styled.div`
  display: none;
  transition: 0.2s;
`;

export const AccountAreaBtn = styled(BlueCTABtn)`
  :hover ${DropdownAccount} {
    display: block;
    background-color: white;
    box-shadow: 0 1px 3px #aaa;
    top: 40px;
    padding: 8% 5% 8% 5%;
    left: -40px;
    overflow: hidden;
    position: absolute;
    min-width: 120px;
    width: 100%;
    z-index: 2;
    border-radius: 2px;
    border-left-style: solid;
    border-color: ${colours.blue};

    a {
      color: ${colours.black};

      :hover {
        color: ${colours.blue};
      }
    }
  }
`;

export const MobileHeaderContainer = styled.div`
  width: 100%;
  display: inline-flex;
  position: relative !important;
  padding: 10px 0 10px 0px;
  z-index: 1 !important;
  justify-content: space-between;
`;

export const ULLI = styled.li``;

export const HeaderLinkA = styled.a`
  color: ${colours.black};
  cursor: pointer;
  margin: 0 16px 0 16px;
  transition: 0.1s;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  :hover {
    color: ${colours.blue};
  }
`;

export const HeaderLinkAMobile = styled(HeaderLinkA)`
  color: ${colours.blue};
  font-size: 24px;
`;

export const MobileNavSection = styled.li`
  margin-bottom: 16px;
`;

export const SubLinkMobile = styled.li`
  margin-bottom: 8px;
`;

export const SubHeaderLinkA = styled.a`
  color: ${colours.blue};
  margin: 0 16px 0 16px;
  transition: 0.1s;
  font-size: 12px;
`;
export const SubHeaderLinkAMobile = styled(SubHeaderLinkA)`
  color: ${colours.black};
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 400;
  font-size: 19px;
`;

export const Text = styled.h1<{ big: boolean }>`
  font-size: ${(props) => (props.big ? 3 : 1.5)}em;
  margin: 0;
  padding-top: 20px;
`;

export const StyledLink = styled.a`
  text-transform: lowercase;
  text-decoration: none;
  color: black;
`;

export const Accent = styled.em`
  font-style: normal;
  color: #0072f4;
`;

export const SmallPrint = styled.p`
  font-size: 10px;
  font-weight: 400;
  margin: 0;
`;

export const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

export const MobileUL = styled.ul`
  display: flex;
  text-align: center;
  list-style-type: none;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: ${colours.white};
  align-items: center;
  height: 100%;
`;

const slideInFromLeft = keyframes`
    from{
        transform: translateX(-100rem);
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
`;

export const MobileNavList = styled.nav`
  overflow-x: hidden;
  animation: ${slideInFromLeft} 0.55s forwards ease-in-out;
`;

export const HamburgerMenuPadding = styled.div`
  padding-right: 10px;
  display: flex;
`;
