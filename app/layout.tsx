import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const georgia = localFont({
  src: [
    {
      path: "./font/georgia.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/georgiab.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/georgiai.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/georgiaz.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-georgia",
});

export const metadata = {
  metadataBase: new URL("https://polk-county-bully-v2-website.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${georgia.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
