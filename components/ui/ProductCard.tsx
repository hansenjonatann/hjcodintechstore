"use client";
import { Eye, ShoppingCart } from "lucide-react";
import { useState } from "react";
import ItemDetailModal from "./ItemDetailModal";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

interface ProductCardProps {
  api: any;
}

export default function ProductCard({ api }: ProductCardProps) {
  const [detailModal, setDetailModal] = useState(false);
  const { isSignedIn } = useUser();
  const openDetailModal = (id: string) => setDetailModal(true);
  const closeDetailModal = () => setDetailModal(false);
  return (
    <>
      {api.map((item: any, index: number) => (
        <div key={index} className="bg-black/90 rounded-lg py-2 w-full">
          <div className="w-full p-2 ">
            <Image
              src={item.image}
              alt={item.name}
              width={600}
              height={600}
              className="rounded-lg "
            />
          </div>
          <div className="mx-2 mt-4">
            <h1 className="text-white font-bold ">{item.name}</h1>
            <p className="text-white bg-blue-800 px-2 py-1 w-32 mt-2 rounded-lg">
              {item.category.name}
            </p>
            <p className="text-white truncate mt-2">{item.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-white text-lg">
                Rp{" "}
                <span className="font-bold text-green-600">
                  {item.price.toLocaleString("ID")}
                </span>
              </p>
            </div>
            <div className="flex gap-x-2 justify-end">
              <button
                onClick={() => openDetailModal(item.id)}
                className="bg-green-600 py-2 px-2 rounded-xl text-white"
              >
                <Eye />
              </button>

              <ItemDetailModal
                id={item.id}
                isOpen={detailModal}
                onClose={closeDetailModal}
              />
              {isSignedIn ? (
                <button className="bg-blue-600 py-2 px-2 rounded-xl text-white">
                  <ShoppingCart />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
