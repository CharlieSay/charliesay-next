import type { NextPage } from "next";
import workHistory from "../data/work-history.json";
import {
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
              <p>{experience.title}</p>
            </ExperienceHeroSection>
            <ExperienceList style={{ display: "flex" }}>
              {experience.keywords.map((keyword) => (
                <PillSection key={keyword}>
                  <Pill>{keyword}</Pill>
                  <PillBlur />
                </PillSection>
              ))}
            </ExperienceList>
            <p>
              {experience.dateFrom} - {experience.dateTo}
            </p>
          </ExperienceUnique>
        ))}
      </ExperienceList>
    </>
  );
};

export default History;
