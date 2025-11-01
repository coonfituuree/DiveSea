import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/shared/ui/Header";

const monsterrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monsterrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DiveSea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monsterrat.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
