import type { Metadata } from "next";
import { Nunito } from "next/font/google"

import "./globals.css";
import { Navbar, RegisterModal, LoginModal } from "./components";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

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

export default  async function RootLayout({
  children,
}: RootProps) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider/>
        <RegisterModal/>
        <LoginModal/>
        <Navbar currentUser={currentUser}/>
        {children}
      </body>
    </html>
  );
}
