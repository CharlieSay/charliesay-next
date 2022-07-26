import type { NextPage } from 'next'
import Image from 'next/image'
import UsesSetup from '../public/img/setup.webp'
import usesData from '../data/uses.json'
import {
  ALink,
  Copy,
  CopyLite,
  LI,
  RightMarginEight,
  TitleH1,
  TitleH2,
  UL,
} from '../styles/common.styles'
import { ContainerFixedWide } from '../styles/containers.styles'

const Uses: NextPage = () => {
  return (
    <ContainerFixedWide>
      <TitleH1>Uses</TitleH1>
      <Image
        src={UsesSetup}
        alt={'the setup, featuring two monitors, keyboard mouse, mac and more.'}
        layout={'intrinsic'}
      />
      <Copy>
        This may be out of date, but you can always find out what loads of other
        developers use over at
        <ALink href={'https://www.uses.tech'}> uses.tech</ALink>
      </Copy>
      <Copy>
        If you&apos;re also looking for configs like VS Code and Intellij they
        can be found in my
        <ALink href="https://www.github.com/CharlieSay/config-repo">
          {' '}
          config repo
        </ALink>
      </Copy>
      {usesData.map((section) => (
        <section key={section.sectionTitle}>
          <TitleH2>{section.sectionTitle}</TitleH2>
          <UL>
            {section.items.map((item) => (
              <LI key={item.itemName}>
                <RightMarginEight>
                  <Image
                    src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${item.href}`}
                    alt={`Icon of ${item.itemName}`}
                    layout={'fixed'}
                    width={20}
                    height={20}
                  />
                </RightMarginEight>
                <ALink href={item.href} target="_blank">
                  <Copy style={{ margin: '0' }}>{item.itemName}</Copy>
                  {item.optionalCopy && (
                    <CopyLite style={{ margin: '0' }}>
                      {item.optionalCopy}
                    </CopyLite>
                  )}
                </ALink>
              </LI>
            ))}
          </UL>
        </section>
      ))}
    </ContainerFixedWide>
  )
}

export default Uses
