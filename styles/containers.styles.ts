import styled from "styled-components";

export const NvContainer = styled.div`
  max-width: 640px;
  padding: 0 16px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  background-color: ${(props) => props.theme.elements.background};
`;

export const NvContainerFixedWide = styled(NvContainer)`
  margin: 0 auto 72px;
  padding: 0 80px 0 80px;
  max-width: ${(props) => props.theme.dimensions.maxWidth};
  @media (min-width: 640px) {
    margin: 0 auto 48px;
  }
  @media (min-width: 392px) {
    margin: 0 auto 48px;
  }
  @media (max-width: ${(props) => props.theme.dimensions.mobileMax}) {
    margin: 0 auto 32px;
    padding: 0 8px 0 8px;
  }
`;

export const BackgroundColour = styled.main`
  background-color: ${(props) => props.theme.elements.background};
`;

export const TopBottomContainedPadding = styled.div`
  padding: 32px 0 0 0;
`;

export const ContainerConstrained = styled(NvContainer)`
  margin: 0 24px 72px;
  padding: 0 80px 0 80px;
  max-width: ${(props) => props.theme.dimensions.maxWidth};
  @media (min-width: 640px) {
    margin: 0 16px 48px;
  }
  @media (min-width: 392px) {
    margin: 0 auto 48px;
  }
  @media (max-width: ${(props) => props.theme.dimensions.mobileMax}) {
    margin: 0 auto 32px;
    padding: 0 8px 0 8px;
  }
`;

export const MiddleAlign = styled.div`
  margin: 0 auto;
  text-align: center;
`;
