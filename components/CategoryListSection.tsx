"use client";
import { useEffect, useState } from "react";
import CategoryCard from "./ui/CategoryCard";
import axios from "axios";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import CategorySkeletonCard from "./ui/CategorySkeletonCard";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`
      );
      if (res) {
        setIsLoading(false);
        setCategories(res.data.data);
      }
    } catch (e) {
      console.log(`${e}`);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="my-4 mx-4">
      <div className="grid grid-cols-3 md:grid-cols-4  gap-4">
        {isLoading ? (
          Array(categories.length || 4) // Display skeletons based on the number of products or a default of 4
            .fill(0)
            .map((_, index) => <CategorySkeletonCard key={index} />)
        ) : (
          <>
            <CategoryCard api={categories} />
            <Link href={`/category/`}>
              <div className="bg-blue-800 rounded-lg w-42 text-white text-center px-2 py-2 font-bold">
                <div className="flex justify-center space-x-2 items-center">
                  <LayoutGrid />
                  <span className="text-xs md:text-lg">Semua kategori</span>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
