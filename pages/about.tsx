import moment from 'moment'
import type { NextPage } from 'next'
import Image from 'next/image'
import profilePicture from '../public/img/profile-pic.webp'
import { AboutHero, BioDescription, HeroHello } from '../styles/about.styles'
import { Description, TitleH1 } from '../styles/common.styles'
import { ContainerFixedWide } from '../styles/containers.styles'

const About: NextPage = () => {
  const currentAge = moment('19960824', 'YYYYMMDD').fromNow(true)
  const developerFor = moment('20170901', 'YYYYMMDD')

  return (
    <ContainerFixedWide>
      <TitleH1>About</TitleH1>
      <AboutHero>
        <Image
          src={profilePicture}
          alt={
            'A semi professional picture of Charlie Say he looks like an idiot'
          }
          width={250}
          height={250}
          layout={'intrinsic'}
        />
        <HeroHello>
          <Description>👋 I&apos;m Charlie Say</Description>
        </HeroHello>
      </AboutHero>
      <BioDescription>
        I&apos;m a {currentAge.substring(0, currentAge.length - 1)} old
        full-stack developer from <span>MCR, UK</span> 🐝
        <br />
        and have been a developer since September 2017! (
        {developerFor.fromNow()} thats {moment().diff(developerFor, 'minutes')}{' '}
        minutes 😲)
      </BioDescription>
      <BioDescription>
        Software for me started out as an apprentice java dev, but as time went
        on I started to love doing consumer facing front-end work coming from
        the creative industry. So I slowly switched to full-stack development.
        <br /> <br />
        <span>HTML, CSS, JS, Java, React, GraphQL, NextJS, Gatsby</span> to name
        a few - those are my jam.
      </BioDescription>
    </ContainerFixedWide>
  )
}

export default About
