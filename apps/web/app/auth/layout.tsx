import type { Metadata } from "next";
import { work_Sans } from "../../public/fonts";
import "@/app/globals.css";

import { cn } from "@/lib/utils"

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
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased", work_Sans.className)}>
        <header>

        </header>
        {children}
      </body>
    </html>
  );
}
