"use client";
import Navbar from "../_components/navbar";
import DashNavbar from "../_components/dashnavbar";
import Footer from "../_components/footer";

import { ThemeProvider } from "../../components/ui/theme-provider";
import "../globals.css";
import { Inter } from "next/font/google";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const isValidToken = ({ token }: { token: string }) => {
      try {
        const { exp } = JSON.parse(atob(token.split(".")[1]));
        return Date.now() < exp * 1000;
      } catch {
        return false;
      }
    };

    if (token && role && isValidToken({ token })) {
      if (role === "candidate") {
        router.replace("/dashboard/candidate");
      } else {
        router.replace("/dashboard/recruiter");
      }
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      setAuthChecked(true); // ✅ Only render home page when this is done
    }
  }, [router]);

  if (!authChecked) return null; // or a loading spinner
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">{children}</main>

      <Footer />
    </>
  );
}
