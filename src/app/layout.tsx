import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import App from "@components/App";

const montserrat = Montserrat({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: "Pretty Pet",
  description: "Платформа для создания pet-проектов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
