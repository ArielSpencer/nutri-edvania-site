import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Nutri Edvânia Soares",
  description: "Nutrição comportativa, consultoria e palestras para empresas e nutricionistas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${lato.variable} antialiased`}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
