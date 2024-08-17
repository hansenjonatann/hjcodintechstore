import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  api: any;
}

export default function CategoryCard({ api }: CategoryCardProps) {
  return (
    <>
      {api.map((item: any, index: number) => (
        <Link href={`/category/${item.slug}`} key={index}>
          <div className="bg-blue-800 rounded-lg w-42 text-white text-center px-2 py-2 font-bold">
            <span>{item.name}</span>
          </div>
        </Link>
      ))}
    </>
  );
}
