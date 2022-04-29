import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
`;

export const LinkBlue = styled.p`
  color: #0070f3;
  margin: 0;
`;

export const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

export const FooterLinkA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const TitleH1 = styled.h1`
  text-decoration: none;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a {
    color: #0070f3;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.p`
  text-align: center;
  margin: 2rem 0 1rem 0;
  font-size: 1.5rem;
`;

export const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  font-size: 0.8rem;
  margin: 0rem 0 1rem 0;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

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
`;

export const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  min-height: 185px;
  border-radius: 10px;
  width: 300px;
`;

export const CardH2 = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

export const CardP = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;

  a {
    color: blue;
    font-weight: 800;
  }
`;
