import { Eye, MessageCircle, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  api: any;
}

export default function ProductCard({ api }: ProductCardProps) {
  return (
    <>
      {api.map((item: any, index: number) => (
        <div
          key={index}
          className="bg-black/90 rounded-lg py-2 w-full"
        >
          <div className="w-full p-2 ">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg oject-cover"
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
              <button className="bg-green-600 py-2 px-2 rounded-xl text-white">
                <Eye />
              </button>
              <button className="bg-blue-600 py-2 px-2 rounded-xl text-white">
                <ShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
