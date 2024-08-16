"use client";
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const headerList = [
    {
      id: 1,
      label: "Beranda",
      url: "/",
    },
    {
      id: 2,
      label: "Riwayat",
      url: "/riwayat",
    },
    {
      id: 3,
      label: "Produk",
      url: "/products",
    },
    {
      id: 4,
      label: "Tentang Kami",
      url: "/tentang",
    },
  ];
  return (
    <>
      <header className="bg-blue-800 py-4 px-4 overflow-hidden">
        <div className="flex w-full  items-center justify-between">
          <h1 className="text-white font-bold">HJ Codin Tech Store</h1>
          <div className="flex items-center text-white gap-x-4">
            <div className="hidden md:flex">
              <ul className="flex items-center gap-x-4">
                {headerList.map((head: any, index: number) => (
                  <li key={index}>
                    <Link href={head.url}>{head.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <ShoppingCart />
            <button className="flex md:hidden" onClick={handleToggle}>
              {!isOpen ? <Menu /> : <X />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
