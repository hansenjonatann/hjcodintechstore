import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ItemDetailModalProps {
  id: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function ItemDetailModal({
  id,
  onClose,
  isOpen,
}: ItemDetailModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const fetchDetailItems = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/product/${id}`
    );
    if (res) {
      setName(res.data.data.name);
      setDescription(res.data.data.description);
      setPrice(res.data.data.price);
      setImage(res.data.data.image);
      setCategory(res.data.data.category.name);
    }
  };

  useEffect(() => {
    fetchDetailItems();
  }, []);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-800  bg-opacity-30 z-50">
      <div className="bg-white/50 backdrop-blur-lg  p-2 lg:p-6 rounded-lg w-[400px]  lg:w-[800px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <Image
              src={image}
              alt={name}
              width={600}
              height={600}
              className="rounded-lg  w-[200px] mx-auto md:w-[600px]"
            />
          </div>
          <div className="mx-4 mt-4 lg:mt-0">
            <div className="flex flex-col">
              <h1 className="font-bold">{name}</h1>
              <p className="text-base-200">{description}</p>
              <div className="lg:mt-16 mt-3">
                <h2 className="text-2xl font-semibold ">
                  Rp{" "}
                  <span className="font-bold text-black">
                    {price.toLocaleString("ID")}
                  </span>
                </h2>
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="bg-red-800 text-white px-8 py-2 rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
