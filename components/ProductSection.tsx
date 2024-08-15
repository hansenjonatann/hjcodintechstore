"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ui/ProductCard";
import axios from "axios";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
      if (res) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-2 mt-4 mx-4 gap-4 lg:grid-cols-4 lg:gap-2 ">
      <ProductCard api={products} />
    </div>
  );
}
