// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
// import { Lora } from "next/font/google";
import "./globals.css";
// import Head from "next/head";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header"; // Importa el Header

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
// const lora = L({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "<pabloMartinez/>",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head> */}
      <body
        className={` ${poppins.className} pt-16 md:pt-16 lg:px-20 grid grid-cols-1 lg:grid-cols-[auto,1fr] lg:min-h-screen`}
      > 
        <Header />
        <aside className="bg-gray-800 text-white">
          <Navbar />
        </aside>
        <main className="p-4 flex justify-center items-center">{children}</main>
      </body>
    </html>
  );
}

// ANIMACION BURBUJAS 
//  <div className="container">
//    <div className="bubbles">
//      <span style={{ "--i": 11 }}></span>
//      {/* <span style={{ "--i": 12 }}></span> */}
//      <span style={{ "--i": 24 }}></span>
//      {/* <span style={{ "--i": 10 }}></span> */}
//      <span style={{ "--i": 14 }}></span>
//      {/* <span style={{ "--i": 24 }}></span> */}
//      {/* <span style={{ "--i": 19 }}></span> */}
//      {/* <span style={{ "--i": 20 }}></span> */}
//      {/* <span style={{ "--i": 22 }}></span> */}
//      {/* <span style={{ "--i": 25 }}></span> */}
//      <span style={{ "--i": 18 }}></span>
//      {/* <span style={{ "--i": 21 }}></span> */}
//      {/* <span style={{ "--i": 15 }}></span> */}
//      <span style={{ "--i": 13 }}></span>
//      <span style={{ "--i": 26 }}></span>
//    </div>
//  </div>;