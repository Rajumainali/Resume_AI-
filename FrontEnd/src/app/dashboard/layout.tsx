// app/dashboard/layout.tsx
import DashNavbar from "../_components/dashnavbar";
import Footer from "../_components/footer";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <DashNavbar />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}
