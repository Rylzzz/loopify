import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, MessageCircle, ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Produk Tidak Ditemukan</h1>
            <Link to="/products">
              <Button>Kembali ke Semua Produk</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan produk ${product.name} yang Anda jual di Loopify. Apakah masih tersedia?`;
    const url = `https://wa.me/${product.sellerPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/products">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali
          </Button>
        </Link>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="aspect-square bg-muted rounded-xl overflow-hidden">
            <Swiper spaceBetween={10} slidesPerView={1}>
              {product.images.map((imgUrl, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={imgUrl}
                    alt={`${product.name} image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-4xl font-bold text-primary mb-6">{formatPrice(product.price)}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Deskripsi</h2>
              <p className="text-muted-foreground leading-relaxed">{product.descriptionLong}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Lokasi</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>
                  {product.location.kabupaten}, {product.location.provinsi}
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity w-full mt-auto"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Hubungi Penjual via WhatsApp
            </Button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Produk Serupa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
