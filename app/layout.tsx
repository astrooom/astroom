import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";

import "./globals.css";
import HeaderNav from "@/components/ui/header-nav";

const font = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "astroom",
  description: "Developer | Creator | System Administrator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        <header className="absolute top-0 inset-x-0">
          <HeaderNav />
        </header>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
