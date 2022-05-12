import { CopyLite } from "./common.styles";
import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.elements.background};
  flex-direction: column;
`;

export const LegalCopy = styled(CopyLite)`
  transition: all 0.25s;
  margin: 8px;
  &:hover {
    color: ${(props) => props.theme.illustration.secondary};
    cursor: pointer;
  }
`;
