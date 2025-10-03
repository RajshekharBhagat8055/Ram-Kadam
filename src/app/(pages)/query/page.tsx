import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import QueryForm from '@/components/QueryForm'
import { buttonVariants } from '@/components/ui/button'
import ClientOnly from '@/components/ClientOnly'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function page() {
  return (
    <section className='relative w-full overflow-hidden my-20'>
        <MaxWidthWrapper>
            <div className='flex flex-col items-center mt-14 bg-white shadow-md rounded-lg p-4 gap-4'>
                <h1 className='text-2xl font-bold'>TRACK YOUR COMPLAINT STATUS</h1>
                <Link className={cn(buttonVariants({size: 'lg', variant: 'default'}),'rounded-full')} href='/complaint-status'>Track Now!</Link>
            </div>
        </MaxWidthWrapper>
        <ClientOnly>
          <QueryForm />
        </ClientOnly>
    </section>
  )
}