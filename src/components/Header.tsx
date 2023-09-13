'use client'

import { useTranslations } from 'next-intl'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { buttonVariants } from './Button'
import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { Globe, List } from '@phosphor-icons/react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

import { usePathname, useRouter } from 'next-intl/client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

type HeaderProps = ComponentProps<'header'>

export default function Header({ className, ...props }: HeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  function changeLocale(locale: string) {
    router.replace(pathname, { locale, scroll: false })
  }

  const t = useTranslations('Nav')

  return (
    <header
      {...props}
      className={cn(
        'sticky top-0 z-50 border-b border-zinc-50/10 bg-void-purple-950/75 backdrop-blur',
        className,
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href={'/'}>
          <Image src={Logo} alt="VOID Icon" height={20} />
        </Link>

        <nav className="hidden items-center gap-4 sm:flex">
          <Link
            className="decoration-transparent underline-offset-8 transition-colors duration-300 hover:text-zinc-200 hover:underline hover:decoration-void-purple-600"
            href={'#'}
          >
            {t('sections.Services.title')}
          </Link>
          <Link
            className="decoration-transparent underline-offset-8 transition-colors duration-300 hover:text-zinc-200 hover:underline hover:decoration-void-purple-600"
            href={'#'}
          >
            {t('sections.Process.title')}
          </Link>
          <Link
            className="decoration-transparent underline-offset-8 transition-colors duration-300 hover:text-zinc-200 hover:underline hover:decoration-void-purple-600"
            href={'#'}
          >
            {t('sections.Projects.title')}
          </Link>
          <Link
            href={'#'}
            className={buttonVariants({ variant: 'outline', size: 'sm' })}
          >
            {t('sections.Contact.title')}
          </Link>

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
              <Globe
                weight="regular"
                size={24}
                className="fill-zinc-200 transition-all duration-300  hover:fill-void-purple-500"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="hover:text-zinc-500">
              <DropdownMenuItem onClick={() => changeLocale('pt')}>
                Português
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLocale('en')}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu */}
        <Sheet modal={false}>
          <SheetTrigger className="sm:hidden">
            <List size={28} weight="bold" />
          </SheetTrigger>
          <SheetContent className="flex flex-col border-zinc-50/10 bg-void-purple-950 py-12 text-lg">
            <Link
              className="flex items-center justify-between rounded-full border-2 border-transparent px-4 py-1.5 transition-colors hover:border-void-purple-600 hover:text-zinc-200"
              href={'#'}
            >
              {t('sections.Services.title')}
            </Link>
            <Link
              className="flex items-center justify-between rounded-full border-2 border-transparent px-4 py-1.5 transition-colors hover:border-void-purple-600 hover:text-zinc-200"
              href={'#'}
            >
              {t('sections.Projects.title')}
            </Link>
            <Link
              className="flex items-center justify-between rounded-full border-2 border-transparent px-4 py-1.5 transition-colors hover:border-void-purple-600 hover:text-zinc-200"
              href={'#'}
            >
              {t('sections.Process.title')}
            </Link>
            <Link href={'#'} className={buttonVariants({ variant: 'outline' })}>
              {t('sections.Contact.title')}
            </Link>

            <div>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="px-4 py-1.5">
                  <Globe
                    weight="regular"
                    size={24}
                    className="hover:fill-zinc-200"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => changeLocale('pt')}>
                    Português
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLocale('en')}>
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
