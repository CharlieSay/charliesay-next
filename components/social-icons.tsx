import Image from 'next/image'
import Link from 'next/link'
import DevTo from '../public/img/social-icons/devto.svg'
import GitHub from '../public/img/social-icons/github.svg'
import Insta from '../public/img/social-icons/instagram.svg'
import Twitter from '../public/img/social-icons/twitter.svg'
import { FillSvg, JustifyContentAround } from '../styles/common.styles'

export const SocialIcons = () => {
  return (
    <JustifyContentAround>
      <FillSvg>
        <Link href={'https://dev.to/charliesay'} passHref={true}>
          <Image src={DevTo} alt={'devTo'} />
        </Link>
      </FillSvg>
      <FillSvg>
        <Link href={'https://github.com/CharlieSay'} passHref={true}>
          <Image src={GitHub} alt={'GitHub'} />
        </Link>
      </FillSvg>
      <FillSvg>
        <Link href={'https://instagram.com/charliesay'} passHref={true}>
          <Image src={Insta} alt={'Instagram'} />
        </Link>
      </FillSvg>
      <FillSvg>
        <Link href={'https://twitter.com/charliesay_'} passHref={true}>
          <Image src={Twitter} alt={'Twitter'} />
        </Link>
      </FillSvg>
    </JustifyContentAround>
  )
}
