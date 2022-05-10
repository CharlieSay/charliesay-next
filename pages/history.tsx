import type { NextPage } from "next";
import workHistory from "../data/work-history.json";
import {
  CopyLite,
  Pill,
  PillBlur,
  PillSection,
  TitleH1,
  TitleH2,
  ALink,
  Copy,
} from "../styles/common.styles";
import {
  ExperienceHeroSection,
  HistoryExperienceLI,
  ExperienceList,
  ExperienceListPill,
  ExperienceSection,
  HistoryExperienceUL,
} from "../styles/history.styles";
import { NvContainerFixedWide } from "../styles/containers.styles";

const History: NextPage = () => {
  return (
    <NvContainerFixedWide>
      <TitleH1>History</TitleH1>
      <ExperienceList>
        {workHistory.map((experience) => (
          <ExperienceSection key={experience.title}>
            <ExperienceHeroSection>
              <TitleH2>
                <ALink href={experience.website}>
                  {experience.company.toUpperCase()}
                </ALink>
              </TitleH2>
              <section>
                <Copy>{experience.title}</Copy>
                <CopyLite>
                  {experience.dateFrom} - {experience.dateTo}
                </CopyLite>
              </section>
            </ExperienceHeroSection>
            <ExperienceListPill>
              {experience.keywords.map((keyword) => (
                <PillSection key={keyword}>
                  <Pill>{keyword}</Pill>
                  <PillBlur />
                </PillSection>
              ))}
            </ExperienceListPill>
            <HistoryExperienceUL>
              {experience.experience.map((exp) => (
                <HistoryExperienceLI key={exp}>
                  <CopyLite>- {exp}</CopyLite>
                </HistoryExperienceLI>
              ))}
            </HistoryExperienceUL>
          </ExperienceSection>
        ))}
      </ExperienceList>
    </NvContainerFixedWide>
  );
};

export default History;
