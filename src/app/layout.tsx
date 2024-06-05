import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./navbar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "라이즈 파트너스",
  description: "캐나다 법인 서비스 / 법인 설립 / 세무 / 비자 / 이민 / 유학 / 비지니스 컨설팅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white text-black shadow-md">
          <NavBar />
        </header>
        <main className="lg:p-0 mx-auto max-w-7xl">{children}</main>
        <div className="pt-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
