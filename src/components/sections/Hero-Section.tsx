'use client'

import { useTranslations } from 'next-intl'
import Container from '@/components/Container'
import { ArrowRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { Button } from '../Button'

import notebook from '@/assets/images/notebook.png'
import phone from '@/assets/images/phone.png'

export default function HeroSection() {
  const t = useTranslations()

  return (
    <section className="overflow-hidden bg-gradient-to-t from-void-purple-700 to-void-purple-950 to-40%">
      <div className="bg-[url(../assets/bg-stars.svg)] bg-contain">
        <Container className="flex flex-col items-center justify-center py-12 lg:flex-row lg:py-0">
          {/* Content */}
          <div className="flex h-fit flex-col items-center space-y-6 md:items-start">
            <div className="flex flex-col items-center space-y-6 text-center md:items-start md:text-left">
              {/* Title */}
              <h1 className="text-void leading max-w-xl font-alt text-6xl font-bold md:text-7xl">
                {t('Section.Hero.title')}{' '}
                <span className="bg-gradient-to-r from-void-purple-600 to-void-purple-500 bg-clip-text text-transparent">
                  {t('Section.Hero.universe')}
                </span>
              </h1>
              {/* Caption */}
              <p className="max-w-md text-lg text-zinc-300 md:text-xl">
                {t('Section.Hero.caption')}
              </p>
            </div>
            {/* CTAs */}
            <div className="flex w-fit gap-4 lg:w-full">
              <Button>{t('CTA.start')}</Button>
              <Button className="flex items-center gap-1" variant={'outline'}>
                {t('CTA.projects')} <ArrowRight weight="bold" size={16} />
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="relative -bottom-14 flex h-[32rem] w-[50rem] items-center justify-center md:h-[40rem]">
            <Image
              className="absolute hidden md:block"
              src={notebook}
              alt="Notebook"
              height={1200}
              width={1200}
            />
            <Image
              className="rotate-6 md:hidden"
              src={phone}
              alt="Notebook"
              width={380}
            />
          </div>
        </Container>
      </div>
    </section>
  )
}
