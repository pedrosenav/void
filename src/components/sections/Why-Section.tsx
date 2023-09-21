'use client'

import Image from 'next/image'
import Container from '../Container'
import ilustracao from '@/assets/aperto-de-mao.svg'
import { useTranslations } from 'next-intl'
import { Button } from '../Button'
import { Reveal } from '../Animations'

export default function Advantages() {
  const t = useTranslations()
  const keys = [
    'Section.WhyUs.list.credibility',
    'Section.WhyUs.list.online-presence',
    'Section.WhyUs.list.marketing',
  ] as const

  return (
    <section>
      <Container className="relative flex flex-col items-center justify-between gap-12 overflow-x-hidden py-12 lg:flex-row">
        <div className="absolute z-0  aspect-square h-1/3 w-[35rem] rounded-full bg-void-purple-600/10 blur-3xl"></div>
        <div className="z-20 space-y-10">
          <div className="space-y-2">
            {/* Subheading */}
            <p className="text-zinc-400">{t('Section.WhyUs.subheading')}</p>
            {/* Title */}
            <h3 className="max-w-lg font-alt text-4xl font-bold">
              {t('Section.WhyUs.title')}
            </h3>
          </div>
          {/* Reasons List */}
          <ul className="space-y-6">
            {keys.map((key, i) => (
              <li key={i}>
                <Reveal delay={i}>
                  <h3 className="text-xl font-semibold">
                    <span className="mr-2 text-void-yellow-400">{i + 1}.</span>
                    {`${t(`${key}.title`)}`}
                  </h3>
                  <p className="max-w-lg text-zinc-400">
                    {t(`${key}.description`)}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Button variant={'secondary'}>{t('CTA.start')}</Button>
        </div>
        <Image src={ilustracao} alt="Pessoas se cumprimentando" height={480} />
      </Container>
    </section>
  )
}
