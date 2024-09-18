import type { Metadata } from "next";
import { Roboto }  from "next/font/google"
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
