"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useState } from "react";

type NavItem = {
  id: string;
  displayText: string;
} & (
  | {
      path: string;
      items?: never;
    }
  | {
      path?: never;
      items: NavItem[];
    }
);

const navItems: NavItem[] = [
  {
    id: "home",
    displayText: "Home",
    path: "/",
  },
  {
    id: "vacation",
    displayText: "Vacation",
    items: [
      {
        id: "vacation-turkey",
        displayText: "Trip to Turkey",
        path: "/turkey",
      },
      {
        id: "vacation-sandylane",
        displayText: "Trip to Sandy Lane",
        path: "/sandylane",
      },
    ],
  },
  {
    id: "about-us",
    displayText: "About Us",
    path: "/about-us",
  },
  {
    id: "contact",
    displayText: "Contact",
    path: "/contact-us",
  },
];

export default function HeaderNav() {
  return (
    <>
      <NavMenu />
      <BreadMenu />
    </>
  );
}

function BreadMenu() {
  return (
    <Sheet>
      <SheetTrigger
        className="block lg:hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        aria-label="Open menu"
      >
        <Menu className="size-6 text-black" aria-hidden />
      </SheetTrigger>
      <SheetContent className="w-screen gap-0">
        <SheetHeader>
          <SheetTitle className="sr-only">Nav Menu</SheetTitle>
        </SheetHeader>
        {navItems.map(
          (navItem) =>
            (navItem.items && (
              <SubMenu
                key={navItem.id}
                label={navItem.displayText}
                navItems={navItem.items}
              />
            )) || (
              <div
                key={navItem.id}
                className="w-full px-3 py-4 font-inter-tight text-lg"
              >
                <Link href={navItem.path || "/"}>
                  {navItem.displayText}
                </Link>
              </div>
            ),
        )}
      </SheetContent>
    </Sheet>
  );
}

function SubMenu({
  label,
  navItems,
}: {
  label: string;
  navItems: NavItem[];
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Collapsible open={isOpen} className="w-full border-y">
      <CollapsibleTrigger
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="w-full flex flex-row justify-between items-center px-3 py-4 font-inter-tight text-left text-lg"
      >
        {label}
        {isOpen ? (
          <ChevronUp className="size-[1.25em]" />
        ) : (
          <ChevronDown className="size-[1.25em]" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full border-t ml-8 px-3 py-4 font-inter-tight text-lg flex flex-col gap-4">
        {navItems.map((navItem) => (
          <Link
            key={navItem.id}
            href={navItem.path || "/"}
            className="block"
          >
            {navItem.displayText}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

function NavMenu() {
  return (
    <NavigationMenu
      className="hidden lg:flex font-inter-tight"
      viewport={true}
    >
      <NavigationMenuList>
        {navItems.map(
          (navItem) =>
            (navItem.items && (
              <NavigationMenuItem key={navItem.id}>
                <NavigationMenuTrigger className="bg-transparent !rounded-full">
                  {navItem.displayText}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      {navItem.items.map((item) => (
                        <NavigationMenuLink key={item.id} asChild>
                          <Link href={item.path || "/"}>
                            {item.displayText}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )) || (
              <NavigationMenuItem key={navItem.id}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="bg-transparent !rounded-full"
                    href={navItem.path || "/"}
                  >
                    {navItem.displayText}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
