"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import DashNavbar from "./dashnavbar";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../../components/ui/theme-provider";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isDashboardRoute = pathname.startsWith("/dashboard");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {!isDashboardRoute ? <Navbar /> : <DashNavbar />}
      <Toaster position="top-right" />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
