'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { MenuItem as MenuItemType, mainMenu } from '@/data/menu'

export default function NavMenu() {
    return (
        <NavigationMenu className='hidden md:flex'>
            <NavigationMenuList>
                {mainMenu.map((item) => (
                    <React.Fragment key={item.name}>
                        {item.children ? (
                            <MenuItemWithDropdown
                                lg={item.lg}
                                name={item.name}
                                href={item.href}
                                item={item.children}
                            />
                        ) : (
                            <MenuItem {...item} />
                        )}
                    </React.Fragment>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export const MenuItem = (item: { name: string; href: string }) => {
    return (
        <NavigationMenuItem>
            <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.name}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    )
}

const MenuItemWithDropdown = (item: {
    lg?: boolean
    name: string
    href: string
    item: MenuItemType[]
}) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul
                    className={cn(
                        'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]',
                        {
                            'w-[500px] md:w-[700px] lg:w-[800px] md:grid-cols-3': item.lg,
                        }
                    )}
                >
                    {item.item.map((component) => (
                        <ListItem
                            key={component.name}
                            title={component.name}
                            href={component.href}
                        >
                            {component.description}
                        </ListItem>
                    ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

ListItem.displayName = 'ListItem'
