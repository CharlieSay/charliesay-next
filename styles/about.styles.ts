import styled from "styled-components";
import { Description } from "./common.styles";
import { dimensions } from "./containers.styles";

export const AboutHero = styled.section`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${dimensions.mobileMax}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroHello = styled(Description)`
  display: flex;
  align-items: center;
`;
