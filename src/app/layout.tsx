import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Topbar from "@/components/common/topbar/Topbar";
import Cta from "@/components/common/cta/Cta";
import Footer from "@/components/common/footer/Footer";
import Container from "@/components/reuseable/Container";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-[1440px] mx-auto">

        
        <Topbar/>
        <Header />
        <Container>


        {children}
        </Container>
        <Cta />
        <Footer />
        </div>
      </body>
    </html>
  );
}
