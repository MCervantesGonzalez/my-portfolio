import type { Metadata } from "next";
import "./globals.css";
import GlobalBackground from "@/components/ui/GlobalBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

export const metadata: Metadata = {
  title: "Miguel Cervantes | Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0a0f16] text-white relative min-h-screen antialiased">
        {/* FONDO GLOBAL ENVOLVERO EN CLIENT COMPONENT */}
        <GlobalBackground />
        <ScrollProgress />
        <ResponsiveNavbar />

        {/* CONTENIDO PRINCIPAL */}
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
