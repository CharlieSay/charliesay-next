import type { NextPage } from 'next'
import {
  CopyLite,
  LI,
  UL,
  TitleH1,
  TitleH2,
  ALink,
} from '../styles/common.styles'
import { ContainerFixedWide } from '../styles/containers.styles'

const PrivacyPolicy: NextPage = () => {
  return (
    <ContainerFixedWide>
      <TitleH1>Privacy Policy for CharlieSay</TitleH1>
      <CopyLite>
        At CharlieSay, accessible from charliesay.xyz, one of our main
        priorities is the privacy of our visitors. This Privacy Policy document
        contains types of information that is collected and recorded by
        CharlieSay and how we use it.
      </CopyLite>

      <CopyLite>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us. Our Privacy Policy was
        generated with the help of{' '}
        <ALink href="https://www.gdprprivacynotice.com/">
          GDPR Privacy Policy Generator from GDPRPrivacyNotice.com
        </ALink>
      </CopyLite>

      <TitleH2>General Data Protection Regulation (GDPR)</TitleH2>
      <CopyLite>We are a Data Controller of your information.</CopyLite>

      <CopyLite>
        Talesoft Digital legal basis for collecting and using the personal
        information described in this Privacy Policy depends on the Personal
        Information we collect and the specific context in which we collect the
        information:
      </CopyLite>
      <UL>
        <LI>Talesoft Digital needs to perform a contract with you</LI>
        <LI>You have given Talesoft Digital permission to do so</LI>
        <LI>
          Processing your personal information is in Talesoft Digital legitimate
          interests
        </LI>
        <LI>Talesoft Digital needs to comply with the law</LI>
      </UL>

      <CopyLite>
        Talesoft Digital will retain your personal information only for as long
        as is necessary for the purposes set out in this Privacy Policy. We will
        retain and use your information to the extent necessary to comply with
        our legal obligations, resolve disputes, and enforce our policies.
      </CopyLite>

      <CopyLite>
        If you are a resident of the European Economic Area (EEA), you have
        certain data protection rights. If you wish to be informed what Personal
        Information we hold about you and if you want it to be removed from our
        systems, please contact us.
      </CopyLite>
      <CopyLite>
        In certain circumstances, you have the following data protection rights:
      </CopyLite>
      <UL>
        <LI>
          The right to access, update or to delete the information we have on
          you.
        </LI>
        <LI>The right of rectification.</LI>
        <LI>The right to object.</LI>
        <LI>The right of restriction.</LI>
        <LI>The right to data portability</LI>
        <LI>The right to withdraw consent</LI>
      </UL>

      <TitleH2>Log Files</TitleH2>

      <CopyLite>
        CharlieSay follows a standard procedure of using log files. These files
        log visitors when they visit websites. All hosting companies do this and
        a part of hosting services&apos; analytics. The information collected by
        log files include internet protocol (IP) addresses, browser type,
        Internet Service Provider (ISP), date and time stamp, referring/exit
        pages, and possibly the number of clicks. These are not linked to any
        information that is personally identifiable. The purpose of the
        information is for analyzing trends, administering the site, tracking
        users&apos; movement on the website, and gathering demographic
        information.
      </CopyLite>

      <TitleH2>Privacy Policies</TitleH2>

      <CopyLite>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of CharlieSay
      </CopyLite>

      <CopyLite>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on CharlieSay, which are sent
        directly to users&apos; browser. They automatically receive your IP
        address when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.
      </CopyLite>

      <CopyLite>
        Note that CharlieSay has no access to or control over these cookies that
        are used by third-party advertisers.
      </CopyLite>

      <TitleH2>Third Party Privacy Policies</TitleH2>

      <CopyLite>
        CharlieSay&apos;s Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options
      </CopyLite>

      <CopyLite>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers&apos; respective
        websites.
      </CopyLite>

      <TitleH2>Children&apos;s Information</TitleH2>

      <CopyLite>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </CopyLite>

      <CopyLite>
        CharlieSay does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our website, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </CopyLite>

      <TitleH2>Online Privacy Policy Only</TitleH2>

      <CopyLite>
        Our Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in CharlieSay. This policy is not applicable to
        any information collected offline or via channels other than this
        website.
      </CopyLite>

      <TitleH2>Consent</TitleH2>

      <CopyLite>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </CopyLite>
    </ContainerFixedWide>
  )
}

export default PrivacyPolicy
