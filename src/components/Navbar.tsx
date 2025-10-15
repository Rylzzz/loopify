import { Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logo from "@/assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Loopify" className="h-10 w-10 object-cover rounded-full" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Loopify
            </span>
          </Link>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:block flex-1 max-w-2xl mx-4"
          >
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

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Icon */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition"
            >
              {showSearch ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
            </button>

            {/* All Products Button */}
            <Link to="/products">
              <Button
                variant="default"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-sm md:text-base"
              >
                Semua Produk
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search (collapsible) */}
        <AnimatePresence>
          {showSearch && (
            <motion.form
              onSubmit={handleSearch}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mt-2 md:hidden"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cari produk preloved..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full"
                  autoFocus
                />
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
