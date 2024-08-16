"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ui/ProductCard";
import axios from "axios";
import SkeletonCard from "./ui/SkeletonCard";

export default function AplikasiWebSection() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/category/${process.env.NEXT_PUBLIC_APLIKASI_WEB_CATEGORY_ID}`
      );
      if (res) {
        setIsLoading(false);
        setProducts(res.data.data.products);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(`${error}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 mt-4 mx-4 gap-4 lg:grid-cols-4 lg:gap-2 ">
      {isLoading ? (
        Array(products.length || 4) // Display skeletons based on the number of products or a default of 4
          .fill(0)
          .map((_, index) => <SkeletonCard key={index} />)
      ) : (
        <ProductCard api={products} />
      )}
    </div>
  );
}
