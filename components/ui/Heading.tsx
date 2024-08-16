import Link from "next/link";

export default function Heading({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <div className="mt-4 mx-4 flex items-center justify-between ">
      <h1 className="font-bold">{title}</h1>
      <Link href={url}>Lihat semua {title} ...</Link>
    </div>
  );
}
