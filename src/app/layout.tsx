import { Footer, ThemeProvider } from "@/components/core";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
const Navigation = dynamic(
  () => {
    return import("@/components/core/Navigation");
  },
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Zaki | Backend Developer",
  description: "Portfolio Zaki - Backend Developer from Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <Navigation />
          <main className="min-h-screen pt-20 px-0">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
