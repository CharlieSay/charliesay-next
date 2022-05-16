import styled from 'styled-components'
import { HeaderLinkA } from './header.styles'

export const Container = styled.div`
  padding: 0 2rem;
`

export const LinkBlue = styled.p`
  color: ${(props) => props.theme.illustration.secondary};
  margin: 0;
  text-decoration: none;
`

export const Main = styled.main`
  min-height: 60vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TitleH1 = styled.h1`
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 3.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.elements.headline};

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`

export const TitleH1Center = styled(TitleH1)`
  text-align: center;
`

export const PillSection = styled.section`
  margin-right: 8px;
`

export const Pill = styled.div`
  z-index: 1;
  padding: 6px 20px;
  border: 1px solid hsla(0, 0%, 100%, 0.07);
  border-radius: 12px;
  background-color: ${(props) => props.theme.illustration.secondary};
  color: ${(props) => props.theme.illustration.stroke};
  font-size: 0.5em;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
`

export const JustifyContentAround = styled.section`
  padding-top: 16px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export const FillSvg = styled.section`
  & :hover {
    cursor: pointer;
  }
`

export const PillBlur = styled(Pill)`
  position: relative;
  bottom: 20px;
  border-radius: 10000000px;
  background-image: linear-gradient(
    270deg,
    rgba(255, 56, 104, 0.5),
    rgba(77, 84, 255, 0.5)
  );
  filter: blur(6px);
  z-index: -1;
`

export const TitleH2 = styled.h2`
  text-decoration: none;
  margin: 0;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${(props) => props.theme.elements.headline};
`

export const TitleH3 = styled.h3`
  text-decoration: none;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.elements.headline};
`

export const TitleH2Center = styled(TitleH2)`
  text-align: center;
`

export const Description = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${(props) => props.theme.elements.paragraph};
`

export const RoughNotationDescription = styled(Description)`
  color: ${(props) => props.theme.illustration.stroke};
`

export const Copy = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${(props) => props.theme.elements.paragraph};
`

export const CopyLite = styled.p`
  font-size: 0.9rem;
  font-weight: 200;
  color: ${(props) => props.theme.elements.paragraph};
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

export const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.elements.headline};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-height: 185px;
  border-radius: 10px;
  width: 300px;
`

export const CardH2 = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.elements.headline};
`

export const CardP = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.elements.paragraph};
  text-align: center;
`

export const TwitterFeedPadding = styled.section`
  padding-top: 64px;
`

export const UL = styled.ul`
  color: inherit;
  display: block;
  padding: 0;
`

export const LI = styled.li`
  list-style: none;
  color: ${(props) => props.theme.elements.paragraph};
  display: flex;
  margin: 0;
  img {
    margin-right: 8px;
    object-fit: contain;
  }
`

export const ALink = styled(HeaderLinkA)`
  margin: 0;
  & :hover {
    color: ${(props) => props.theme.illustration.secondary};
    font-weight: 500;
  }
`

export const RightMarginEight = styled.section`
  margin-right: 8px;
`
