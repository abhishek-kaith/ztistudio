import { PurpleCircle, RedCircle } from '@/components/Orbs'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SendHorizontal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <section className="h-[calc(100dvh-var(--header-height))] overflow-hidden">
            <div className="container h-full flex items-center justify-center flex-col gap-4">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-grt">
                    ZTI Studio
                </h1>
                <p className="text-lg md:text-2xl">
                    Welcome to the Pixel Party!
                </p>
                <Link
                    href={'/contact'}
                    className={cn(
                        buttonVariants(),
                        'flex bg-grt text-base font-medium'
                    )}
                >
                    Get Started
                    <SendHorizontal className="ml-2" height={18} width={18} />
                </Link>
            </div>
            <RedCircle />
            <PurpleCircle />
        </section>
    )
}

export default Hero
