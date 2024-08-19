import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { ClerkProvider } from "@clerk/nextjs";
import ClientProvider from "@/hook/Provider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "HJ Codin Tech Store",
  description:
    "HJ Codin Tech Store adalah Toko Online yang menyediakan berbagai templates , layanan , dan produk yang dijual dan dibuat oleh Tim HJ Codin Tech",

  creator: "HJ Codin Tech Team",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ClientProvider>
        <html lang="en">
          <body className={`${poppins.className} `}>
            <Toaster position="top-right" />
            {children}
          </body>
        </html>
      </ClientProvider>
    </ClerkProvider>
  );
}
