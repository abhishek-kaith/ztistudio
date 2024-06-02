import { cn } from '@/lib/utils'
import React from 'react'

function page() {
    return (
        <section className="h-screen relative">
            <RedCircle />
            <PurpleCircle />
        </section>
    )
}

export default page

const RedCircle = (props: { className?: string }) => {
    return (
        <div
            className={cn(
                'absolute bg-gr-red blur-[120px] opacity-75  h-32 w-32  bottom-3/4 left-0',
                props.className
            )}
        />
    )
}

const PurpleCircle = (props: { className?: string }) => {
    return (
        <div
            className={cn(
                'absolute bg-gr-purple blur-[120px] opacity-75 h-32 w-32  right-0 top-0',
                props.className
            )}
        />
    )
}