import Link from "next/link";
import React from "react";
// import HamburgerMenu from "react-hamburger-menu";
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
} from "./header.styles";

export const DesktopHeader = (props: HeaderPropsAsClass) => {
  const { headerLinks } = props;

  return (
    <Headroom
      style={{
        boxShadow: "1px 1px 1px rgba(0,0,0,0.025)",
      }}
    >
      <Header>
        <HeaderContainer>
          <FloatLeft>
            <Text big={false}>
              <StyledLink href="/">
                Charlie<Accent>Say</Accent>
              </StyledLink>
            </Text>
          </FloatLeft>
          <nav>
            <UL>
              {headerLinks.map((link) => (
                <ULLI key={link.displayText}>
                  <Link href={link.url}>
                    <HeaderLinkA>{link.displayText}</HeaderLinkA>
                  </Link>
                </ULLI>
              ))}
            </UL>
          </nav>
        </HeaderContainer>
      </Header>
    </Headroom>
  );
};

// export const MobileHeader = (props: HeaderPropsAsClass) => {
//   const [showNav, setShowNav] = useState(false);
//   const { headerLinks } = props;
//   const { items } = useCart();

//   return (
//     <Headroom
//       style={{
//         backgroundColor: "white",
//         display: "flex",
//         justifyContent: "center",
//         flexDirection: "column",
//       }}
//       onUnfix={() => setShowNav(false)}
//     >
//       <MobileHeaderContainer>
//         <Logo style={{ padding: `3px 0 0 10px` }} href="/">
//           NEW VISION
//         </Logo>
//         <HamburgerMenuPadding>
//           {items.length > 0 && (
//             <CartMenu href="/cart">
//               <Cart
//                 width={24}
//                 height={24}
//                 src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v2.png"
//               />
//             </CartMenu>
//           )}
//           <HamburgerMenu
//             isOpen={showNav}
//             height={24}
//             width={28}
//             menuClicked={() => setShowNav(!showNav)}
//             color="black"
//             animationDuration={0.5}
//           />
//         </HamburgerMenuPadding>
//       </MobileHeaderContainer>
//       {showNav && (
//         <MobileNavList>
//           <NvContainerFixedWide>
//             {isAuthenticated && (
//               <AccountAreaBtn
//                 style={{ width: "100%", marginBottom: "8px" }}
//                 href={"/my-account"}
//               >
//                 My Account
//               </AccountAreaBtn>
//             )}
//             {isAuthenticated && <LogOutBtn fullWidth={true} />}
//             {!isAuthenticated && <LogInBtn fullWidth={true} />}
//           </NvContainerFixedWide>
//           <MobileUL>
//             {headerLinks.map((headerlink) => (
//               <MobileNavSection key={headerlink.displayText}>
//                 <HeaderLinkAMobile href={headerlink.url}>
//                   {headerlink.displayText}
//                 </HeaderLinkAMobile>
//                 <>
//                   {headerlink.subHeaders &&
//                     headerlink.subHeaders.map((subLinks) => (
//                       <SubLinkMobile key={subLinks.displayText}>
//                         <SubHeaderLinkAMobile href={subLinks.url}>
//                           {subLinks.displayText}
//                         </SubHeaderLinkAMobile>
//                       </SubLinkMobile>
//                     ))}
//                 </>
//               </MobileNavSection>
//             ))}
//           </MobileUL>
//         </MobileNavList>
//       )}
//     </Headroom>
//   );
// };

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
