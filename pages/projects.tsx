import type { NextPage } from 'next'
import { Copy, TitleH1, TitleH2 } from '../styles/common.styles'
import { ContainerFixedWide } from '../styles/containers.styles'
import projects from '../data/projects.json'
import Link from 'next/link'
const Snippets: NextPage = () => {
  return (
    <ContainerFixedWide>
      <TitleH1>Projects</TitleH1>
      {projects.map((project) => (
        <Link key={project.title} href={project.url} passHref={true}>
          <section
            style={{
              display: 'flex',
              paddingBottom: '32px',
              justifyContent: 'justify-between',
            }}
          >
            <section>
              <TitleH2>{project.title}</TitleH2>
              <Copy>{project.description}</Copy>
            </section>
            <img style={{ maxWidth: '300px' }} src={project.imgLocation} />
          </section>
        </Link>
      ))}
    </ContainerFixedWide>
  )
}

export default Snippets
