import Navbar from "../_components/navbar";
import Footer from "../_components/footer";

import { ThemeProvider } from "../../components/ui/theme-provider";
import "../globals.css";
import { Inter } from "next/font/google";

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
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </>
  );
}
