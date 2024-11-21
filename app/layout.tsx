import type { Metadata } from "next";
import "./globals.css";
import { merriweather } from "../app/fonts/fonts";
import LenisComponent from "@/utils/LenisComponent";

export const metadata: Metadata = {
  title: "Blue Sanctuary",
  description: "Save Our Oceans | Blue Sanctuary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LenisComponent>
      <html lang="en">
        <body
          suppressHydrationWarning
          className={`${merriweather.className}  antialiased h-[200vh]`}
        >
          {children}
        </body>
      </html>
    </LenisComponent>
  );
}
