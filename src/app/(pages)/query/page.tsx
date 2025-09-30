import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import QueryForm from '@/components/QueryForm'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <section className='relative w-full overflow-hidden my-20'>
        <MaxWidthWrapper>
            <div className='flex flex-col items-center mt-14 bg-white shadow-md rounded-lg p-4 gap-4'>
                <h1 className='text-2xl font-bold'>TRACK YOUR COMPLAINT STATUS</h1>
                <Button size={'lg'} className='rounded-full'>Track Now!</Button>
            </div>
        </MaxWidthWrapper>
        <QueryForm />
    </section>
  )
}