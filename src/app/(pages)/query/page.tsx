"use client"
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import QueryForm from '@/components/QueryForm'
import { buttonVariants } from '@/components/ui/button'
import ClientOnly from '@/context/ClientOnly'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

export default function QueryPage() {
  const { t } = useTranslation();
  return (
    <section className='relative w-full overflow-hidden my-20'>
        <MaxWidthWrapper>
            <ClientOnly>
              <div className='flex flex-col items-center mt-14 bg-white shadow-md rounded-lg p-4 gap-4'>
                  <h1 className='text-2xl font-bold'>{t('statusTracker.title')}</h1>
                  <Link className={cn(buttonVariants({size: 'lg', variant: 'default'}),'rounded-full')} href='/complaint-status'>{t('statusTracker.track')}</Link>
              </div>
            </ClientOnly>
        </MaxWidthWrapper>
        <ClientOnly>
          <QueryForm />
        </ClientOnly>
    </section>
  )
}