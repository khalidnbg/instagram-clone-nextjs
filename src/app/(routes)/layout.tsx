import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme>
          {modal}
          <div className="flex min-h-screen">
            <DesktopNav />
            <div className="pb-24 lg:pb-4 lg:px-8 px-4 pt-4 flex justify-around w-full">
              <div>{children}</div>
            </div>
          </div>
          <MobileNav />
        </Theme>
      </body>
    </html>
  );
}
