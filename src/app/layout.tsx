import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Update the import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
