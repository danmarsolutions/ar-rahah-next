'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavItem = {
    id: string
    displayText: string
} & (
        {
            path: string
            items?: never
        } |
        {
            path?: never
            items: NavItem[]
        }
    );

const navItems: NavItem[] = [
    {
        id: 'home',
        displayText: 'Home',
        path: '/',
    },
    {
        id: 'vacation',
        displayText: 'Vacation',
        items: [
            {
                id: 'vacation-turkey',
                displayText: 'Trip to Turkey',
                path: '/',
            },
        ],
    },
    {
        id: 'about-us',
        displayText: 'About Us',
        path: '/about-us',
    },
];

export default function HeaderNav() {


    return (
        <>
            <NavMenu />
            <BreadMenu />
        </>
    )
}

function BreadMenu() {

    const pathname = usePathname();
    const isHome = pathname === '/';

    const breadMenuIcon = (isHome && '/icons/white-bread-menu.svg') || '/icons/bread-menu.svg';

    return (
        <Sheet>
            <SheetTrigger className="block lg:hidden"><img className="size-6" src={breadMenuIcon} /></SheetTrigger>
            <SheetContent className="w-full gap-0">
                <SheetHeader>
                    <SheetTitle>Nav Menu</SheetTitle>
                </SheetHeader>
                {
                    navItems.map(navItem => (
                        (navItem.items && (
                            <SubMenu
                                key={navItem.id}
                                label={navItem.displayText}
                                navItems={navItem.items}
                            />
                        )) || (
                            <div key={navItem.id} className="w-full border-t px-3 py-4 font-inter-tight text-lg">
                                <Link href={navItem.path || '/'}>
                                    {navItem.displayText}
                                </Link>
                            </div>
                        )))
                }
            </SheetContent>
        </Sheet>
    )
}

function SubMenu({ label, navItems }: { label: string, navItems: NavItem[] }) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Collapsible open={isOpen} className="w-full border-y">
            <CollapsibleTrigger onClick={() => setIsOpen(isOpen => !isOpen)} className="w-full flex flex-row justify-between items-center px-3 py-4 font-inter-tight text-left text-lg">
                {label}
                {isOpen ? <ChevronUp className="size-[1.25em]" /> : <ChevronDown className="size-[1.25em]" />}
            </CollapsibleTrigger>
            <CollapsibleContent className="w-full border-t ml-8 px-3 py-4 font-inter-tight text-lg">
                {navItems.map(navItem => (
                    <Link key={navItem.id} href={navItem.path || '/'}>{navItem.displayText}</Link>
                ))}
            </CollapsibleContent>
        </Collapsible>
    )
}

function NavMenu() {

    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <NavigationMenu className="hidden lg:flex font-inter-tight" viewport={true}>
            <NavigationMenuList className={cn(isHome && 'text-white')}>
                {
                    navItems.map(navItem => (
                        (navItem.items && (
                            <NavigationMenuItem key={navItem.id}>
                                <NavigationMenuTrigger className="bg-transparent !rounded-full">{navItem.displayText}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            {navItem.items.map(item => (
                                                <NavigationMenuLink key={item.id} asChild>
                                                    <Link href={item.path || '/'}>{item.displayText}</Link>
                                                </NavigationMenuLink>
                                            ))}
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )) || (
                            <NavigationMenuItem key={navItem.id}>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link className="bg-transparent !rounded-full" href={navItem.path || '/'}>{navItem.displayText}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}