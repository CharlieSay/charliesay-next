import React from "react";
import styled from "styled-components";

const Text = styled.h1<{ big: boolean }>`
  font-size: ${(props) => (props.big ? 3 : 1.5)}em;
  margin: 0;
`;

const StyledLink = styled.a`
  text-transform: lowercase;
  text-decoration: none;
  color: black;
`;

const Accent = styled.em`
  font-style: normal;
  color: #0072f4;
`;

const SmallPrint = styled.p`
  font-size: 10px;
  font-weight: 400;
  margin: 0;
`;

type Props = {
  big?: boolean;
};

function Logo({ big }: Props) {
  return (
    <Text big={big || false}>
      <StyledLink href="/">
        Charlie<Accent>Say</Accent>
      </StyledLink>
      <SmallPrint>MADE IN MCR, UK</SmallPrint>
    </Text>
  );
}

export default Logo;
