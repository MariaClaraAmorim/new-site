import "../styles/global.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { OpenFilesTabs } from "@/components/OpenFilesTabs";
import { OpenFilesProvider } from "@/hooks/useOpenFiles";
import { Header } from "@/components/header";
import { Menu } from "@/components/menu";
import { Explorer } from "@/components/explorer";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: {
    default: "Maria",
    template: "%s | Maria Clara",
  },
  robots: {
    index: true,
    follow: true,
  },
  description:
    "Ainda não sei o que será esse projeto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <head />
      <body className="bg-[#7F7FD5] bg-app">
        <div className="z-10 relative h-screen p-20 flex items-center justify-center">
          <div className="bg-[#232135] overflow-hidden border border-[#72707D] h-5/6 shadow-md shadow-black/20 rounded-lg grid grid-rows-layout">
            <OpenFilesProvider>
              <Header />

              <div className="grid grid-cols-editor max-h-full">
                <Menu />
                <Explorer />

                <div className="h-full relative flex flex-col">
                  <OpenFilesTabs />
                  <div className="h-full relative">{children}</div>
                </div>
              </div>
            </OpenFilesProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
