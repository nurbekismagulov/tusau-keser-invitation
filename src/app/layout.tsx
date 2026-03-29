import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Issa",
  description: "A Next.js product workspace for shaping the next build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
