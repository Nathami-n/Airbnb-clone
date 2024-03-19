import type { Metadata } from "next";
import { Nunito } from "next/font/google"

import "./globals.css";
import { Navbar, RegisterModal, LoginModal } from "./components";
import ToasterProvider from "./providers/ToasterProvider";

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
        <ToasterProvider/>
        <RegisterModal/>
        <LoginModal/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
