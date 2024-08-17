"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { LogIn, Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isSignedIn } = useUser();
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
          <h1 className="text-white font-bold">
            <div className="flex items-center space-x-2">
              <div className="bg-white w-22 h-22 rounded-full">
                <Image src={"/logo.png"} width={50} height={50} alt="Logo" />
              </div>
              <span className="text-xl">Store</span>
            </div>
          </h1>
          <div className="flex items-center text-white gap-x-4">
            <div className="hidden md:flex">
              <ul className="flex items-center gap-x-4">
                {headerList.map((head: any, index: number) => (
                  <li key={index}>
                    <Link
                      href={head.url}
                      className="font-semibold transition duration-300 hover:underline"
                    >
                      {head.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {isSignedIn && <ShoppingCart />}
            <button className="flex md:hidden" onClick={handleToggle}>
              {!isOpen ? <Menu /> : <X />}
            </button>
            {!isSignedIn && (
              <Link
                href={"/sign-in"}
                className="bg-indigo-600 hidden md:flex font-semibold rounded-lg px-2 py-2"
              >
                Daftar Gratis
              </Link>
            )}

            {isSignedIn && (
              <div className="hidden md:flex">
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>
        </div>
      </header>
      {isOpen ? (
        <>
          <div className="bg-blue-800 md:hidden text-white py-4 ">
            <hr />
            <div className="flex flex-col mt-2 mx-4 gap-y-2">
              {headerList.map((head: any, index: number) => (
                <li key={index} className="list-none ">
                  <Link
                    href={head.url}
                    className="font-semibold transition duration-300 hover:bg-white hover:text-blue-800 hover:px-2  "
                  >
                    {head.label}
                  </Link>
                </li>
              ))}
              {isSignedIn ? (
                <div className="flex gap-x-2 items-center ">
                  <UserButton />
                  <span>
                    Selamat Datang ,{" "}
                    <span className="font-bold">{user.username}</span>
                  </span>
                </div>
              ) : (
                <Link
                  href={"/sign-in"}
                  className="bg-indigo-600 w-52 font-semibold rounded-lg px-2 py-2"
                >
                  <div className="flex gap-x-2">
                    <LogIn />
                    <span>Daftar Gratis</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
