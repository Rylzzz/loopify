import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap- shrink-0">
            <img src={logo} alt="JajanU" className="h-10 w-15" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Loopify
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari produk preloved..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </form>

          {/* All Products Button */}
          <Link to="/products" className="shrink-0">
            <Button variant="default" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Semua Produk
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
