import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";
import { BottomNav } from "./components/ui/BottomNav";

const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Gilroy-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wash World",
  description: "Wash World car wash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gilroy.variable} h-full`}>
      <body className="min-h-full  bg-page  w-97.5 text-text-white">
        <div className="mx-auto flex min-h-screen p-4 flex-col">
          <QueryProvider>{children}</QueryProvider>
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
