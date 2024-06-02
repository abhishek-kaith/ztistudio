'use client'
import React from 'react'
import { useEffect } from 'react'

function HeaderWrapper({ children }: { children: React.ReactNode }) {
    const ref = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!ref.current) return
        const header = ref.current.querySelector('header')
        if (!header) return
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.setAttribute('data-header-sticky', 'true')
            } else {
                header.removeAttribute('data-header-sticky')
            }
        })
    }, [ref])
    return <div ref={ref}>{children}</div>
}

export default HeaderWrapper
