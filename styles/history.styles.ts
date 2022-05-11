import styled from "styled-components";

export const ExperienceSection = styled.section``;

export const ExperienceList = styled.ul`
  list-style: none;
  padding: 8px;
`;

export const ExperienceListPill = styled.ul`
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  padding: 0;
`;

export const ExperienceHeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h2 {
    margin-top: auto;
    margin-bottom: auto;
  }
  section {
    text-align: end;
  }
  @media (max-width: ${(props) => props.theme.dimensions.mobileMax}) {
    h2 {
      margin: auto;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
    }
    section {
      text-align: center;
      p {
        margin: 0 0 12px 0;
      }
    }
  }
`;

export const HistoryExperienceUL = styled.ul`
  list-style-type: none;
  text-align: start;
  width: 100%;
  padding: 0;
`;

export const HistoryExperienceLI = styled.li`
  text-align: start;
  width: 100%;
`;
