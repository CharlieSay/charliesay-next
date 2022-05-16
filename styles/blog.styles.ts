import styled from 'styled-components'
import { CopyLite, TitleH3 } from './common.styles'

export const BlogPostGrid = styled.section`
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  -ms-grid-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  width: 100%;
  grid-auto-columns: 1fr;
  display: grid;
`

export const Tag = styled.p`
  font-size: 9px;
  color: ${(props) => props.theme.illustration.secondary};
  padding-left: 2px;
  font-weight: 600;
`

export const TagsGroup = styled.section`
  display: flex;
  align-items: center;
`

export const BlogPost = styled.section`
  padding: 20px 25px 20px 25px;
  border: 2px solid ${(props) => props.theme.illustration.secondary};
  background-color: ${(props) => props.theme.illustration.stroke};
  box-shadow: 0 10px 34px 0
    (${(props) => props.theme.illustration.secondary} / 35%);
  margin: 0 !important;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 10px;
  height: 210px;
  border-radius: 10px;
  & :hover {
    cursor: pointer;
  }
`

export const DateTag = styled(CopyLite)`
  color: ${(props) => props.theme.illustration.secondary};
  font-weight: 700;
`

export const CardTitle = styled(TitleH3)`
  font-size: 22px;
  max-height: 50px;
  color: ${(props) => props.theme.illustration.main};
  margin: 0;
`

export const ReadingTime = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.illustration.main};
`

export const CardFooter = styled.section`
  justify-content: space-between;
  display: flex;
`

export const CardHeader = styled.section`
  justify-content: space-between;
  display: flex;
`
