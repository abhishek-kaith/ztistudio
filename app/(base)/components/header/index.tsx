import React from 'react'
import ModeToggle from './mode-toggle'
import Logo from '@/components/Logo'
import { SendHorizontal } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'
import NavMenu from './NavMenu'
import HeaderWrapper from './header-wrapper'

function Header() {
    return (
        <HeaderWrapper>
            <header className="h-header flex justify-between items-center container z-50">
                <Link href="/" aria-label="Home">
                    <Logo />
                </Link>
                <NavMenu />
                <div className="flex md:gap-4 items-center">
                    <Link
                        href={'/contact'}
                        className={cn(
                            buttonVariants(),
                            'hidden md:flex hover:bg-grt hover:text-white text-base font-medium'
                        )}
                    >
                        Get Started
                        <SendHorizontal
                            className="ml-2"
                            height={18}
                            width={18}
                        />
                    </Link>
                    <ModeToggle />
                    <MobileMenu />
                </div>
            </header>
        </HeaderWrapper>
    )
}

export default Header
