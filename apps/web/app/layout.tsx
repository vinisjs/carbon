import type { Metadata } from "next";
import { work_Sans } from "./fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Carbon Cycle",
  description: "Next app - web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-zinc-100 ${work_Sans.className}`}>{children}</body>
    </html>
  );
}
