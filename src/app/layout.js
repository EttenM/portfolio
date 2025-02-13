import { Literata, Rubik_Mono_One, Diplomata_SC } from "next/font/google";
import "./globals.scss";

import Lenis from "./Lenis";

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
  title: "Михаил - Frontend Creative Developer",
  description:
    "Frontend Creative Developer. Создаю эффектные индивидуальные веб-сайты. Ответственно подхожу к работе, уделяю внимание деталям & качеству",
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
