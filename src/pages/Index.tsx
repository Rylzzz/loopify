import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import CategorySection from "@/components/CategorySection";
import { Category } from "@/types/product";
import ChatBot from "@/components/ChatBot";

const categories: Category[] = ["Baju", "Celana", "Sepatu", "Elektronik", "Buku", "Gadget"];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Carousel */}
        <section className="container mx-auto px-4 py-8">
          <HeroCarousel />
        </section>

        {/* Category Sections */}
        <section className="container mx-auto px-4 py-8">
          {categories.map((category) => (
            <CategorySection key={category} category={category} />
          ))}
        </section>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
