import AplikasiWebSection from "@/components/AplikasiWebSection";
import CarouselSection from "@/components/Carousel";
import ProductSection from "@/components/ProductSection";
import Heading from "@/components/ui/Heading";

export default function Home() {
  return (
    <div>
      <main>
        {/* Carousel Section */}

        <CarouselSection />

        {/* Produk Heading   */}
        <Heading title="Produk" url="/products" />

        {/* Produk  Section */}
        <ProductSection />

        {/* Aplikasi Web Heading */}
        <Heading title="Aplikasi Web" url="/category/aplikasi-web" />

        {/* Aplikasi Web Section */}
        <AplikasiWebSection />
      </main>
    </div>
  );
}
