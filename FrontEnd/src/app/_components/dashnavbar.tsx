"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
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
import { Menu, X } from "lucide-react";

const DashNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.replace("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full dark:bg-[#000000] py-2">
        <div className="ml-6">
          <Image
            src="/img/logo.png"
            alt="Example image"
            width={200}
            height={200}
            className="dark:hidden"
          />
          <Image
            src="/img/logo1.png"
            alt="Example image"
            width={200}
            height={200}
            className="dark:block hidden"
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
                  <Link
                    href="/dashboard/recruiter/contact"
                    className="px-4 py-2"
                  >
                    Contact
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

              <NavigationMenuItem>
                <button
                  className="px-4 py-2 text-red-600 hover:text-red-800 font-medium"
                  onClick={handlelogout}
                >
                  Logout
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuViewport />
            <ModeToggle />
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed md:hidden top-0 left-0 h-full w-[300px] bg-white dark:bg-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
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
        <nav className="flex flex-col gap-4 p-6 text-l dark:text-white">
          <Link
            href="/"
            onClick={toggleSidebar}
            className={`hover:bg-[#aa8beddb] p-3 rounded-2xl ${
              pathname === "/" ? "bg-[#aa8bed]" : "bg-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/"
            onClick={toggleSidebar}
            className={`hover:bg-[#aa8beddb] p-3 rounded-2xl ${
              pathname === "/Internship" ? "bg-[#aa8bed]" : "bg-white"
            }`}
          >
            Internship
          </Link>
          <Link
            href="/"
            onClick={toggleSidebar}
            className={`hover:bg-[#aa8beddb] p-3 rounded-2xl ${
              pathname === "/Job" ? "bg-[#aa8bed]" : "bg-white"
            }`}
          >
            Job
          </Link>

          <button
            onClick={() => {
              toggleSidebar();
            }}
            className="hover:bg-red-600 hover:text-white p-3 rounded-2xl text-red-600 font-semibold"
          >
            Logout
          </button>
        </nav>
        <div className="mt-4">
          <ModeToggle />
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

export default DashNavbar;
