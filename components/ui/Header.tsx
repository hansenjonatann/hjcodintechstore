"use client";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="bg-blue-800 py-4 px-4 overflow-hidden">
        <div className="flex w-full  items-center justify-between">
          <h1 className="text-white font-bold">HJ Codin Tech Store</h1>
          <div className="flex items-center text-white gap-x-4">
            <ShoppingCart />
            <button onClick={handleToggle}>{!isOpen ? <Menu /> : <X />}</button>
          </div>
        </div>
      </header>
    </>
  );
}
