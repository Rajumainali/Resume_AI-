"use client";

import React, { useState } from "react";
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
import { Menu, X } from "lucide-react"; // icons
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  return (
    <>
      <div className="flex justify-between items-center w-full   dark:bg-[#000000]    py-2 ">
        <div className="ml-6 ">
          <Image
            src="/img/logo.png" // or from /public folder
            alt="Example image"
            width={200}
            height={200}
            className=" dark:hidden   "
          />
          <Image
            src="/img/logo1.png" // or from /public folder
            alt="Example image"
            width={200}
            height={200}
            className="dark:block hidden "
          />
        </div>
        <div className="relative hidden md:block">
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
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            {isOpen ? <Menu size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed  md:hidden top-0 left-0 h-full w-[300px] bg-white dark:bg-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image
            src="/img/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="dark:hidden"
          />
          <Image
            src="/img/logo1.png"
            alt="Logo dark"
            width={150}
            height={50}
            className="hidden dark:block"
          />
          <button onClick={toggleSidebar}>
            <X size={28} className="dark:text-white" />
          </button>
        </div>
        <div className="flex justify-center items-start">
          <nav className="flex flex-col gap-4 p-6 text-l dark:text-white">
            <Link
              href="/"
              onClick={toggleSidebar}
              className={`hover:bg-[#aa8beddb] p-3 rounded-2xl   ${
                pathname === "/" ? "bg-[#aa8bed] " : "bg-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/"
              onClick={toggleSidebar}
              className={`hover:bg-[#aa8beddb] p-3 rounded-2xl   ${
                pathname === "/Internship" ? "bg-[#aa8bed] " : "bg-white"
              }`}
            >
              Internship
            </Link>
            <Link
              href="/"
              onClick={toggleSidebar}
              className={`hover:bg-[#aa8beddb] p-3 rounded-2xl   ${
                pathname === "/Job" ? "bg-[#aa8bed] " : "bg-white"
              }`}
            >
              Job
            </Link>
            <Link
              href="/login"
              onClick={toggleSidebar}
              className={`hover:bg-[#aa8beddb] p-3 rounded-2xl   ${
                pathname === "/login" ? "bg-[#aa8bed] " : "bg-white"
              }`}
            >
              Login
            </Link>
            <Link
              href="/register/candidate"
              onClick={toggleSidebar}
              className={`hover:bg-[#aa8beddb] p-3 rounded-2xl   ${
                pathname === "/register/candidate"
                  ? "bg-[#aa8bed] "
                  : "bg-white"
              }`}
            >
              Register as candidate
            </Link>
            <Link
              href="/register/recruiter"
              onClick={toggleSidebar}
              className={`hover:bg-[#aa8beddb] p-3 rounded-2xl   ${
                pathname === "/register/recruiter"
                  ? "bg-[#aa8bed] "
                  : "bg-white"
              }`}
            >
              Register as recruiter
            </Link>
          </nav>
          <div className="mt-4">
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Navbar;
