'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
}

function NavLink(props: Props) {
    const pathname = usePathname()
    const isActive = pathname === props.href
    return (
        <Link
            data-active={isActive}
            className={cn(
                'data-[active=true]:text-gr-accent',
                props.className
            )}
            href={props.href}
        >
            {props.children}
        </Link>
    )
}

export default NavLink
