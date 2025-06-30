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


                {/* Login */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2">
                    Login
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Events dropdown */}

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Register</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink className="w-45" asChild>
                        <Link href="/" className="px-2 py-2">
                          Register as a Candidate
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-45" asChild>
                        <Link href="/" className="px-2 py-2">
                          Register as a Recurter 
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="w-45" asChild>
                        <Link href="/" className="px-2 py-2">
                          Register as a Admin
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
