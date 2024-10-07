import type { Metadata } from "next";
import '@styles/app.style.scss';
import { Montserrat } from 'next/font/google'
import App from "@components/App";
import { theme } from "@/app/constants/theme";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: theme.palette.background.default }} className={montserrat.className}>
        <Header />

        <App>{children}</App>

        <Footer />
      </body>
    </html>
  );
}
