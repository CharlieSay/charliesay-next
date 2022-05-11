import styled from "styled-components";
import { Description } from "./common.styles";
import { dimensions } from "./containers.styles";

export const AboutHero = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  @media (max-width: ${dimensions.mobileMax}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroHello = styled.section`
  display: flex;
  align-items: center;
`;

export const BioDescription = styled(Description)`
  text-align: start;

  span {
    font-weight: 600;
    color: ${(props) => props.theme.illustration.stroke};
  }
`;
