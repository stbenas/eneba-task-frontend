import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from '@/src/components/TopNav';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eneba's internship task",
  description: "Eneba's internship task's frontend application created by Benas Stanulis",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-1 flex-col overflow-hidden px-4 py-6">
          <div className="flex-none w-full">
            <TopNav />
          </div>
          <div className="flex-1 overflow-y-auto p-6 md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );  
}
