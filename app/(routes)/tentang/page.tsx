import Header from "@/components/ui/Header";

export default function Tentang() {
  return (
    <>
      <Header />

      <div className="mx-4">
        <h1 className="text-3xl text-blue-800 mt-8 font-bold text-center">
          Tentang Kami
        </h1>
        <p className="mt-8">
          <span className="font-bold">HJ Codin Tech Store</span> adalah sebuah
          toko online yang didirikan oleh{" "}
          <a
            href="https://hjcodintech.site"
            target="__blank"
            className="font-bold text-blue-800"
          >
            HJ Codin Tech
          </a>{" "}
          untuk menjual beberapa produk berupa ebook , aplikasi web , source
          code , layanan , dll. HJ Codin Tech Store memiliki syarat dan
          ketentuan yang wajib dituruti oleh pengguna atau pembeli.
        </p>

        <div className="mt-8">
          <h1 className="font-bold text-2xl">Syarat & Ketentuan</h1>
          <ol className="list-decimal mx-4 mt-4">
            <li>
              Pembeli dilarang keras menyebarkan produk yang ditulis oleh HJ
              Codin Tech secara gratis.
            </li>
            <li>
              Semua produk yang dijual di{" "}
              <span className="font-bold">HJ Codin Tech Store</span> adalah
              hasil kerja dari tim
            </li>
            <li>Dilarang menyebarkan nomor Whatsapp Admin</li>
            <li>
              Untuk Layanan berupa Jasa Pembuatan Website , pembeli harap
              membayar DP terlebih dahulu , transaksi akan dilakukan di Whatsapp
            </li>
            <li>
              Untuk pembelian berupa Source Code , akan dikirim melalui Google
              Drive
            </li>
            <li>Pesanan akan diproses secara bertahap</li>
          </ol>
        </div>
      </div>
    </>
  );
}
