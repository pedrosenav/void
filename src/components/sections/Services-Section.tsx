'use client'

import { useTranslations } from 'next-intl'
import { ComponentProps } from 'react'
import Container from '../Container'
import Image from 'next/image'
import icon from '@/assets/icon.svg'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Devices,
  PersonArmsSpread,
  Globe,
  ListMagnifyingGlass,
  Gauge,
  Shapes,
  PenNib,
  DeviceMobileCamera,
  IntersectThree,
  Layout,
} from '@phosphor-icons/react'
import { Button } from '../Button'
import { cn } from '@/lib/utils'

interface FeatureCardProps extends ComponentProps<'li'> {
  icon: React.ElementType
  title: string
  description: string
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <li className={cn('z-20 shadow-lg backdrop-blur', className)}>
      <Card className="h-full border-void-purple-500 bg-void-purple-500/10 text-center text-zinc-50">
        <CardHeader className="flex flex-row items-center justify-center gap-2 lg:flex-col">
          <Icon size={48} className="fill-void-yellow-400" />
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="mx-auto max-w-sm text-sm leading-snug text-zinc-400">
          <p>{description}</p>
        </CardContent>
      </Card>
    </li>
  )
}

export default function Services() {
  const t = useTranslations()

  return (
    <section className="overflow-x-clip bg-gradient-to-t from-void-purple-950 to-void-purple-700 to-30%">
      <Container className="space-y-12 py-12">
        <div className="absolute left-0 top-1/3 z-0 aspect-square h-1/2 -translate-x-3/4 rounded-full bg-void-purple-500/30 blur-3xl"></div>
        <div className="absolute right-0 top-1/2 z-0 aspect-square h-1/2 translate-x-3/4 rounded-full bg-void-yellow-500/30 blur-3xl"></div>

        {/* Websites */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Texts */}
          <div className="z-20 flex flex-col items-start gap-6">
            <h3 className="font-alt text-4xl font-bold">
              {t('Section.Services.Web.title')}
            </h3>
            <div className="h-1 w-8 bg-void-purple-300"></div>
            <p className="max-w-lg text-zinc-300">
              {t('Section.Services.Web.caption')}
            </p>
            <Button>{t('CTA.start')}</Button>
          </div>

          {/* Features */}
          <ul className="z-20 flex grid-rows-3 flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            <FeatureCard
              icon={Devices}
              title={t('Section.Services.Web.features.1.title')}
              description={t('Section.Services.Web.features.1.caption')}
            />
            <FeatureCard
              icon={Gauge}
              title={t('Section.Services.Web.features.2.title')}
              description={t('Section.Services.Web.features.2.caption')}
            />
            <FeatureCard
              icon={Shapes}
              title={t('Section.Services.Web.features.3.title')}
              description={t('Section.Services.Web.features.3.caption')}
            />
            <FeatureCard
              icon={PersonArmsSpread}
              title={t('Section.Services.Web.features.4.title')}
              description={t('Section.Services.Web.features.4.caption')}
            />
            <FeatureCard
              icon={Globe}
              title={t('Section.Services.Web.features.5.title')}
              description={t('Section.Services.Web.features.5.caption')}
            />
            <FeatureCard
              icon={ListMagnifyingGlass}
              title={t('Section.Services.Web.features.6.title')}
              description={t('Section.Services.Web.features.6.caption')}
            />
          </ul>
        </div>

        {/* Design */}
        <div className="flex flex-col-reverse justify-between gap-12 md:flex-row">
          <ul className="z-20 flex grid-rows-3 flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            <FeatureCard
              className="col-span-2"
              icon={PenNib}
              title={t('Section.Services.Design.features.1.title')}
              description={t('Section.Services.Design.features.1.caption')}
            />
            <FeatureCard
              icon={DeviceMobileCamera}
              title={t('Section.Services.Design.features.2.title')}
              description={t('Section.Services.Design.features.2.caption')}
            />
            <FeatureCard
              icon={IntersectThree}
              title={t('Section.Services.Design.features.3.title')}
              description={t('Section.Services.Design.features.3.caption')}
            />
            <FeatureCard
              className="col-span-2"
              icon={Layout}
              title={t('Section.Services.Design.features.4.title')}
              description={t('Section.Services.Design.features.4.caption')}
            />
          </ul>
          <div className="z-20 flex flex-col items-end gap-6 text-right">
            <h3 className="font-alt text-4xl font-bold">
              {t('Section.Services.Design.title')}
            </h3>
            <div className="h-1 w-8 bg-void-yellow-300"></div>
            <p className="max-w-lg  text-zinc-300">
              {t('Section.Services.Design.caption')}
            </p>

            <Button variant={'secondary'}>{t('CTA.start')}</Button>
          </div>
        </div>

        {/* Background Image */}
        <Image
          src={icon}
          alt="Void Icon"
          className="absolute right-1/2 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 select-none px-12 opacity-5"
          height={600}
        />
      </Container>
    </section>
  )
}
