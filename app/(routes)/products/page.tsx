"use client";

import Header from "@/components/ui/Header";
import ProductCard from "@/components/ui/ProductCard";
import SkeletonCard from "@/components/ui/SkeletonCard";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products`
      );
      if (res) {
        setIsLoading(false);
        setProducts(res.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <div className="my-8 mx-4">
        <h1 className="text-center font-bold text-3xl">Semua Produk..</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {isLoading ? (
            Array(products.length || 4) // Display skeletons based on the number of products or a default of 4
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          ) : (
            <ProductCard api={products} />
          )}
        </div>

        <div className="flex">
          <Link
            href={"/"}
            className="text-center text-white bg-blue-800 px-2 py-2 mx-auto rounded-lg mt-8"
          >
            Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </>
  );
}
