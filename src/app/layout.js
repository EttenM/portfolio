import { Literata, Rubik_Mono_One, Diplomata_SC } from "next/font/google";
import "./globals.scss";
// import Footer from "./blocks/footer/Footer";

import Lenis from "./Lenis";
import Head from "next/head";

const literata = Literata({
  subsets: ["latin", "cyrillic"],
  variable: "--font-literata",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin", "cyrillic"],
  variable: "--font-rubikMonoOne",
  weight: ["400"],
});
const diplomataSC = Diplomata_SC({
  subsets: ["latin"],
  variable: "--font-diplomataSC",
  weight: ["400"],
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
        className={`${diplomataSC.variable} ${rubikMonoOne.variable} ${literata.variable} antialiased bg-secondAccent overflow-hidden`}
      >
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
