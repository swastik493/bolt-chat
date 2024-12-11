import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter as FontSans} from "next/font/google"

// const inter = Inter({subsets:["latin"]})
import {cn} from "@/lib/utils"

const fontSans = FontSans({
  subsets :['latin'],
  variable:"--font-sans"
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quick Chat App",
  description: "Chatting quick asap without login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
