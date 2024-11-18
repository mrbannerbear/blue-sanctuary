import type { Metadata } from "next";
import "./globals.css";
import { merriweather } from "../app/fonts/fonts";

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
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${merriweather.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
