import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NUMÉWEB – Plateforme IA",
  description: "Centralisez, pilotez, automatisez avec vos collaborateurs IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="bg-numeweb">
      <body className={`${inter.className} min-h-screen text-slate-50 overflow-x-hidden bg-numeweb`}>
        <Header />
        {children}
      </body>
    </html>
  );
}