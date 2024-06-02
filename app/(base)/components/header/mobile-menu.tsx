import { Button, buttonVariants } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { mainMenu } from '@/data/menu'
import { MenuIcon, SendHorizontal } from 'lucide-react'
import NavLink from '@/components/NavLink'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size={'icon'}
                    aria-label="Menu Button"
                    className="md:hidden"
                >
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-left">ZTI</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    {mainMenu.map((item) => (
                        <NavLink key={item.name} href={item.href}>
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <SheetFooter>
                    <Link
                        href={'/contact'}
                        className={cn(
                            buttonVariants(),
                            'flex hover:bg-grt hover:text-white text-base font-medium'
                        )}
                    >
                        Get Started
                        <SendHorizontal
                            className="ml-2"
                            height={18}
                            width={18}
                        />
                    </Link>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
