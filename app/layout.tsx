import type { Metadata } from "next";
import { Nunito } from "next/font/google"

import "./globals.css";
import { Navbar } from "./components";

const nunito = Nunito({
  subsets: ['latin']
})



export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Cloned by Nathan George",
};

interface RootProps {
  children: Readonly<React.ReactNode>
}

export default function RootLayout({
  children,
}: RootProps) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
