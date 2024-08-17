import AplikasiWebSection from "@/components/AplikasiWebSection";
import CarouselSection from "@/components/Carousel";
import CategoryList from "@/components/CategoryListSection";
import ProductSection from "@/components/ProductSection";
import Header from "@/components/ui/Header";
import Heading from "@/components/ui/Heading";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Carousel Section */}

        <CarouselSection />

        {/* Category Heading */}

        <div className="mx-4 my-4">
          <h1 className="font-bold text-xl  ">Kategori</h1>
          <p>Di bawah ini merupakan kategori dari Produk</p>
        </div>

        {/* Category List */}

        <CategoryList />

        {/* Produk Heading   */}
        <Heading title="Produk Terbaru" url="/products" />

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
