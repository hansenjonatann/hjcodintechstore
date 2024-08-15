import CarouselSection from "@/components/Carousel";
import ProductSection from "@/components/ProductSection";
import Heading from "@/components/ui/Heading";

export default function Home() {
  return (
    <div>
      <main>
        {/* Carousel Section */}

        <CarouselSection />

        {/* Heading   */}
        <Heading
          title="Produk"
          subTitle="Lihat semua Produk..."
          url="/products"
        />

        {/* Produk  Section */}
        <ProductSection />
      </main>
    </div>
  );
}
