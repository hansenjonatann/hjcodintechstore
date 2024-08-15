import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "HJ Codin Tech Store",
  description:
    "HJ Codin Tech Store adalah Toko Online yang menyediakan berbagai templates , layanan , dan produk yang dijual dan dibuat oleh Tim HJ Codin Tech",

  creator: "HJ Codin Tech Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" sizes="any" />
      <body className={`${poppins.className} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
