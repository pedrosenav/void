'use client'

import Container from './Container'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'
import { SocialProps, Social } from '@/lib/social'
import { useTranslations } from 'next-intl'

function SocialIcon({ icon: Icon, url, platformName }: SocialProps) {
  return (
    <Link href={url} title={platformName}>
      <Icon
        size={28}
        weight="regular"
        className="fill-void-purple-500 transition-all hover:scale-110 hover:fill-void-purple-600"
      />
    </Link>
  )
}

interface FooterListProps {
  title: string
  links: Array<{ url: string; text: string }>
}

function FooterList({ title, links }: FooterListProps) {
  return (
    <div className="space-y-2 text-sm">
      <span className="font-bold uppercase tracking-widest text-zinc-200">
        {title}
      </span>
      <ul className="space-y-1 text-zinc-400">
        {links.map((link) => (
          <li
            key={link.text}
            className="decoration-transparent underline-offset-4 transition-colors duration-300 hover:underline hover:decoration-void-purple-600"
          >
            <Link target="_blank" href={link.url}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const t = useTranslations()

  const navLinks = [
    {
      text: t('Nav.sections.Services.title'),
      url: t('Nav.sections.Services.url'),
    },
    {
      text: t('Nav.sections.Projects.title'),
      url: t('Nav.sections.Projects.url'),
    },
    {
      text: t('Nav.sections.WhyUs.title'),
      url: t('Nav.sections.WhyUs.url'),
    },
    {
      text: t('Nav.sections.Process.title'),
      url: t('Nav.sections.Process.url'),
    },
    {
      text: t('Nav.sections.Contact.title'),
      url: t('Nav.sections.Contact.url'),
    },
  ]

  const socialLinks = Social.map((social) => {
    return {
      text: social.platformName,
      url: social.url,
    }
  })

  return (
    <footer className="bg-void-purple-950">
      <Container className="flex flex-col items-center justify-between gap-10 py-8 sm:flex-row sm:items-start">
        <Image src={Logo} alt="VOID Icon" height={24} />

        <div className="flex gap-16">
          <FooterList title={t('Footer.navigation')} links={navLinks} />
          <FooterList title={t('Footer.social')} links={socialLinks} />
        </div>

        <div className="flex items-center gap-4">
          {Social.map((social) => (
            <SocialIcon key={social.title} {...social} />
          ))}
        </div>
      </Container>

      <Container>
        <p className="py-8 text-center text-xs font-light text-zinc-200">
          {t('Footer.credits')}{' '}
          <Link
            className="font-semibold underline-offset-2 hover:underline"
            href={'https://github.com/pedrosenav'}
            target="_blank"
          >
            Pedro Sena
          </Link>{' '}
          &{' '}
          <Link
            className="font-semibold underline-offset-2 hover:underline"
            href={'https://github.com/jeovanlindo'}
            target="_blank"
          >
            Jeovan Lindo
          </Link>
        </p>
      </Container>
    </footer>
  )
}
