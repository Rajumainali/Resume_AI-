"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../components/ui/navigation-menu";
import { ModeToggle } from "./darktoggle";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full px-[130px] py-2 ">
        <div>
          <Image
            src="/img/logo.png" // or from /public folder
            alt="Example image"
            width={200}
            height={200}
            className=" dark:hidden "
          />
          <Image
            src="/img/logo1.png" // or from /public folder
            alt="Example image"
            width={200}
            height={200}
            className="dark:block hidden "
          />
        </div>
        <div className="relative">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row items-center gap-6 mr-36">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 hover:underline">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Internship */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 hover:underline">
                    Internship
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Job */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 hover:underline">
                    Job
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Events dropdown */}

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink className="w-20" asChild>
                        <Link href="/" className="px-4 py-2 hover:underline">
                          Link 1
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-20" asChild>
                        <Link href="/" className="px-4 py-2 hover:underline">
                          Link 2
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-20" asChild>
                        <Link href="/" className="px-4 py-2 hover:underline">
                          Link 3
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </NavigationMenuList>

            <ModeToggle />
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
