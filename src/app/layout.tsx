import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hayden Owens",
  description: "Hayden Owens Software Development Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
          <a href="/">Home</a>
          <div>
            <a href="/login">Login</a>
            <a href="/contact">Contact</a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
