import { cn } from '@/lib/utils'
import React from 'react'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: React.ReactNode
    fullWidth?: boolean
    backgroundType?: 'default' | 'secondary'
}

function Section(props: SectionProps) {
    return (
        <section
            className={cn('py-14 bg-background', {
                'bg-secondary': props.backgroundType === 'secondary',
            })}
        >
            <div
                className={cn(
                    'w-full  space-y-6',
                    {
                        container: !props.fullWidth,
                        'px-2 2xl:px-3': props.fullWidth,
                    },
                    props.className
                )}
                {...props}
            >
                {props.children}
            </div>
        </section>
    )
}

export default Section
