import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcadia - Le Marais Paris",
  description: "Arcadia - Restaurant & Buffets au coeur du Marais, Paris 3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
