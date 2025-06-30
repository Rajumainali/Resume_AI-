import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ui/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "QuickRecruit",
  description: "Resume Ranking AI platform",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="overflow-x-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}