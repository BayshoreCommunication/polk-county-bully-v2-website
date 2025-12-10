import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";
import localFont from "next/font/local";
import "./globals.css";

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
      <body className={`${georgia.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
