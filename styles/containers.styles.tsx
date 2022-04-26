import styled from "styled-components";

const dimensions = {
  maxWidth: "1200px",
  minWidth: "320px",
  contentWidth: "1024px",
  mobileMax: "860px",
  baseUnit: "8px",
};

export const NvContainer = styled.div`
  display: block;
  margin: 0 0 72px;
  max-width: auto;
  position: relative;
`;

export const NvContainerFixedWide = styled(NvContainer)`
  margin: 0 auto 72px;
  padding: 0 80px 0 80px;
  max-width: ${dimensions.maxWidth};
  @media (min-width: 640px) {
    margin: 0 auto 48px;
  }
  @media (min-width: 392px) {
    margin: 0 auto 48px;
  }
  @media (max-width: ${dimensions.mobileMax}) {
    margin: 0 auto 32px;
    padding: 0 8px 0 8px;
  }
`;

export const TopBottomContainedPadding = styled.div`
  padding: 32px 0 0 0;
`;

export const ContainerConstrained = styled(NvContainer)`
  margin: 0 24px 72px;
  padding: 0 80px 0 80px;
  max-width: ${dimensions.maxWidth};
  @media (min-width: 640px) {
    margin: 0 16px 48px;
  }
  @media (min-width: 392px) {
    margin: 0 auto 48px;
  }
  @media (max-width: ${dimensions.mobileMax}) {
    margin: 0 auto 32px;
    padding: 0 8px 0 8px;
  }
`;

export const MiddleAlign = styled.div`
  margin: 0 auto;
  text-align: center;
`;
