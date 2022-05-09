import type { NextPage } from "next";
import workHistory from "../data/work-history.json";
import {
  Description,
  Pill,
  PillBlur,
  PillSection,
  TitleH1,
  TitleH2,
} from "../styles/common.styles";
import {
  ExperienceHeroSection,
  ExperienceList,
  ExperienceUnique,
  HistoryExperienceLI,
  HistoryExperienceUL,
} from "../styles/history.styles";

const History: NextPage = () => {
  return (
    <>
      <TitleH1>History</TitleH1>
      <ExperienceList>
        {workHistory.map((experience) => (
          <ExperienceUnique key={experience.title}>
            <ExperienceHeroSection>
              <TitleH2>{experience.company.toUpperCase()}</TitleH2>
              <Description>{experience.title}</Description>
              <Description>
                {experience.dateFrom} - {experience.dateTo}
              </Description>
            </ExperienceHeroSection>
            <ExperienceList style={{ display: "flex" }}>
              {experience.keywords.map((keyword) => (
                <PillSection key={keyword}>
                  <Pill>{keyword}</Pill>
                  <PillBlur />
                </PillSection>
              ))}
            </ExperienceList>
            <HistoryExperienceUL>
              {experience.experience.map((exp) => (
                <HistoryExperienceLI key={exp}>
                  <Description style={{ textAlign: "start" }}>
                    - {exp}
                  </Description>
                </HistoryExperienceLI>
              ))}
            </HistoryExperienceUL>
          </ExperienceUnique>
        ))}
      </ExperienceList>
    </>
  );
};

export default History;
