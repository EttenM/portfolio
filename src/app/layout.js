import localFont from "next/font/local";
import "./globals.scss";
// import Footer from "./blocks/footer/Footer";

import Lenis from "./Lenis";

const literata = localFont({
  src: "./fonts/Literata-VariableFont_opsz,wght.ttf",
  variable: "--font-literata",
  weight: "100 900",
});

export const metadata = {
  title: "Михаил - Web разработчик",
  description:
    "Создам качественный сайт любой сложности с современными анимациями, 3D. Адаптация под устройства, SEO оптимизация, поддержка.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${literata.className} antialiased bg-accent overflow-y-hidden `}
      >
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
