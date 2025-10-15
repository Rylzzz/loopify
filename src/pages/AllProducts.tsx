import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Category } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");

  const categories: (Category | "All")[] = ["All", "Baju", "Celana", "Sepatu", "Elektronik", "Buku", "Gadget"];
  const locations = ["All", ...new Set(products.map((p) => p.location.kabupaten))];

  // Get search query from URL params
  const searchQuery = searchParams.get("search") || "";
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam as Category)) {
      setSelectedCategory(categoryParam as Category);
    }
  }, [categoryParam]);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || product.location.kabupaten === selectedLocation;
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesLocation && matchesSearch;
  });

  const handleCategoryChange = (category: Category | "All") => {
    setSelectedCategory(category);
    if (category !== "All") {
      searchParams.set("category", category);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Semua Produk Preloved</h1>

        {searchQuery && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              Hasil pencarian untuk: <span className="font-semibold text-foreground">"{searchQuery}"</span>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Kategori</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        selectedCategory === category ? "bg-gradient-primary" : ""
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category === "All" ? "Semua Kategori" : category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Lokasi</h3>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <Button
                      key={location}
                      variant={selectedLocation === location ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        selectedLocation === location ? "bg-secondary text-secondary-foreground" : ""
                      }`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      {location === "All" ? "Semua Lokasi" : location}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-muted-foreground">
                Menampilkan {filteredProducts.length} produk
              </p>
              {(selectedCategory !== "All" || selectedLocation !== "All" || searchQuery) && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedLocation("All");
                    setSearchParams({});
                  }}
                >
                  Reset Filter
                </Button>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">Tidak ada produk ditemukan</p>
                <Button
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedLocation("All");
                    setSearchParams({});
                  }}
                >
                  Reset Filter
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProducts;
