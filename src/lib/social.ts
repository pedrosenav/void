import {
  BehanceLogo,
  EnvelopeSimple,
  InstagramLogo,
  WhatsappLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import { ElementType } from 'react'

interface SocialProps {
  url: string
  platformName: string
  title: string
  icon: ElementType
}

const Social = [
  {
    url: 'https://instagram.com/void',
    platformName: 'LinkedIn',
    title: '/void',
    icon: LinkedinLogo,
  },
  {
    url: 'https://instagram.com/void',
    platformName: 'Instagram',
    title: '@void',
    icon: InstagramLogo,
  },
  {
    url: 'https://behance.net/void',
    platformName: 'Behance',
    title: '/void',
    icon: BehanceLogo,
  },
  {
    url: 'https://wa.me/552222222222',
    platformName: 'WhatsApp',
    title: '(22) 2222-2222',
    icon: WhatsappLogo,
  },
  {
    url: 'void@gmail.com',
    platformName: 'E-mail',
    title: 'void@gmail.com',
    icon: EnvelopeSimple,
  },
]

export { Social, type SocialProps }
