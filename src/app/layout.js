import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "<pabloMartinez/>",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body
        className={`flex h-screen flex-col lg:flex-row md:overflow-hidden ${inter.className}`}
      >
        <div className="w-full lg:w-64">
          <Navbar />
        </div>
        <div className="flex-grow p-6 lg:overflow-y-auto lg:p-12">
          {children}
        </div>
      </body>
    </html>
  );
}
