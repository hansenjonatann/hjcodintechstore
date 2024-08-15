import Link from "next/link";

export default function Heading({
  title,
  url,
  subTitle,
}: {
  title: string;
  subTitle: string;
  url: string;
}) {
  return (
    <div className="mt-4 mx-4 flex items-center justify-between ">
      <h1 className="font-bold">{title}</h1>
      <Link href={url}>{subTitle}</Link>
    </div>
  );
}
