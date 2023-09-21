'use client'

import { useTranslations } from 'next-intl'
import Container from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  PresentationChart,
  NotePencil,
  RocketLaunch,
} from '@phosphor-icons/react'
import { Reveal } from '../Animations'

interface ProcessStepProps {
  icon: React.ElementType
  title: string
  description: string
  index: number
}

function ProcessStep({
  icon: Icon,
  title,
  description,
  index,
}: ProcessStepProps) {
  return (
    <Card className="relative z-30 w-full flex-1 border-void-purple-500 bg-void-purple-500/10 py-6 text-zinc-50 sm:max-w-lg lg:w-fit">
      <div className="absolute left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-11 place-items-center rounded-full border border-void-purple-500 bg-void-purple-700 p-1 font-alt text-xl text-void-purple-300">
        {index}
      </div>
      <CardHeader className="flex flex-row items-center justify-center gap-2 lg:flex-col">
        <Icon size={56} className="fill-void-yellow-500" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="mx-auto max-w-xs text-zinc-400">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

export default function Process() {
  const t = useTranslations('Section.Process')

  const steps = [
    {
      icon: NotePencil,
      title: t('timeline.1.title'),
      description: t('timeline.1.description'),
    },
    {
      icon: RocketLaunch,
      title: t('timeline.2.title'),
      description: t('timeline.2.description'),
    },
    {
      icon: PresentationChart,
      title: t('timeline.3.title'),
      description: t('timeline.3.description'),
    },
  ]

  return (
    <section>
      <Container className="space-y-12 py-12 text-center">
        <div className="relative flex flex-col items-center space-y-2">
          {/* Title */}
          <h3 className="z-10 font-alt text-4xl font-bold">{t('title')}</h3>
          {/* Caption */}
          <p className="text-zinc-400">{t('caption')}</p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col items-center justify-center lg:flex-row">
          {steps.map(
            (step, i) => (
              <Reveal
                key={step.title}
                delay={i}
                className="flex w-full flex-col items-center justify-center lg:flex-row"
              >
                <ProcessStep {...step} index={i + 1} />
                <Reveal delay={i + 1}>
                  {i < 2 && (
                    <div className="h-14 w-[2px] bg-void-purple-300 lg:h-[2px] lg:w-10"></div>
                  )}
                </Reveal>
              </Reveal>
            ),
            //
          )}
        </div>
      </Container>
    </section>
  )
}
