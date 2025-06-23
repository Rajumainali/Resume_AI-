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
import { ButtonDemo } from "../_components/button";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full     py-2 ">
        <div className="ml-6">
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
                  <Link href="/" className="px-4 py-2">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Internship */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2">
                    Internship
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Job */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2">
                    Job
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Events dropdown */}

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/login" className="px-4 py-2">
                    Login
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    {/* data-[state=open]:bg-[#CBB2FF] helps for invisible when the trigger is unfocuse */}
                    <NavigationMenuTrigger className="bg-[#CBB2FF] hover:!bg-[#c7bae4] dark:text-black transition-none focus:bg-[#CBB2FF] data-[state=open]:bg-[#CBB2FF] ">
                      Register
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink className="w-48" asChild>
                        <Link href="/register/candidate" className="px-4 py-2">
                          Register as candidate
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-48" asChild>
                        <Link href="/register/recruiter" className="px-4 py-2">
                          Register as recruiter
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </NavigationMenuList>

            <NavigationMenuViewport />
            <ModeToggle />
          </NavigationMenu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
