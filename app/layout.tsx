import type { Metadata } from "next";
import { Roboto }  from "next/font/google"
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";


const geistSans = Roboto( 
    {subsets: ["latin"], weight: '500'}
)


export const metadata: Metadata = {
  title: "Expense Tracker Demo",
  description: "Expense APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <Header />
        <main className="container">
        {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
