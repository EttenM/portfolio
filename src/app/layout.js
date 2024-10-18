import { Literata } from "next/font/google";
import "./globals.scss";
// import Footer from "./blocks/footer/Footer";

import Lenis from "./Lenis";
import Head from "next/head";

const literata = Literata({
  subsets: ["cyrillic"],
  variable: "--font-Literata",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Михаил - Web разработчик",
  description:
    "Создам креативный сайт любой сложности с современными анимациями, 3D. Адаптация под устройства, SEO оптимизация, поддержка.",
  keywords: [
    "Сайт на заказ",
    "Разработать сайт",
    "Сайт с анимациями",
    "Сделать сайт",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${literata.className} antialiased bg-accent overflow-hidden`}
      >
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
