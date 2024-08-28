import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { CounterStoreProvider } from "@/providers/counter-store-provider";
import { CartStoreProvider } from "@/providers/cart-store-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden Buy",
  description: "Your one stop shop for laptops, accessories and gadgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CounterStoreProvider>
          <CartStoreProvider>
          <Navbar />
          {children}
          </CartStoreProvider>
        </CounterStoreProvider>
      </body>
    </html>
  );
}
