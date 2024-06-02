import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import 'react-loading-skeleton/dist/skeleton.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurant",
  description: "Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
