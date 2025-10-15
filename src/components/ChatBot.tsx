import React, { useEffect, useState, useRef } from "react";
import type { Product } from "../types/product";
import { products } from "../data/products";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";


// helper format rupiah
const formatRp = (n: number) =>
  n.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

type Message = {
  id: string;
  from: "user" | "bot";
  text?: string;
  products?: Product[];
};

// Fungsi NLU sederhana
function parseQuery(raw: string) {
  const q = raw.toLowerCase().replace(/[?]/g, "").trim();

  // Split kata
  const words = q.split(/\s+/);

  // mapping kategori
  const categoriesMap: Record<string, string[]> = {
    Baju: ["baju", "kemeja", "kaos", "jaket", "flanel"],
    Sepatu: ["sepatu", "sneakers", "heels"],
    Gadget: ["gadget", "hp", "smartphone", "telepon"],
    Buku: ["buku", "novel", "komik", "bisnis"],
    Elektronik: ["elektronik", "tv", "televisi", "laptop", "speaker"],
  };

  let category: string | null = null;
  for (const [cat, kws] of Object.entries(categoriesMap)) {
    if (kws.some((k) => q.includes(k))) {
      category = cat;
      break;
    }
  }

  // lokasi: cocokkan dengan kabupaten/provinsi di data
  let location: { kabupaten?: string; provinsi?: string } | null = null;
  for (const p of products) {
    const kab = p.location?.kabupaten?.toLowerCase();
    const prov = p.location?.provinsi?.toLowerCase();
    if (kab && q.includes(kab)) location = { kabupaten: p.location.kabupaten };
    if (prov && q.includes(prov)) location = { provinsi: p.location.provinsi };
  }

  const isAsking = /(ada|apakah|cari|tunjukkan|lihat|pengen|mau)/.test(q);
  return { words, category, location, isAsking };
}

// Pencarian kata per kata
function searchProducts(parsed: ReturnType<typeof parseQuery>) {
  const { words, category, location } = parsed;
  let results = products.slice();

  // filter kategori jika terdeteksi
  if (category) {
    results = results.filter((p) => p.category?.toLowerCase() === category.toLowerCase());
  }

  // filter lokasi
  if (location) {
    if (location.kabupaten)
      results = results.filter(
        (p) => p.location?.kabupaten?.toLowerCase() === location.kabupaten?.toLowerCase()
      );
    if (location.provinsi)
      results = results.filter(
        (p) => p.location?.provinsi?.toLowerCase() === location.provinsi?.toLowerCase()
      );
  }

  // pencarian fuzzy per kata di name dan description
  results = results.filter((p) => {
    const hay = `${p.name} ${p.description} ${p.category}`.toLowerCase();
    return words.some((w) => hay.includes(w));
  });

  return results;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      from: "bot",
      text: "Halo 👋 Aku Loopify Assistant, siap bantu cari produk preloved kamu! Mau cari apa hari ini?",
    },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  const pushMessage = (m: Message) => setMessages((prev) => [...prev, m]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    pushMessage({ id: `u-${Date.now()}`, from: "user", text });
    setInput("");

    const parsed = parseQuery(text);
    const results = searchProducts(parsed);

    if (!parsed.isAsking && results.length === 0) {
      pushMessage({
        id: `b-${Date.now()}`,
        from: "bot",
        text: "Maaf, saya belum paham pertanyaan itu. Bisa jelaskan produk yang kamu cari?",
      });
      return;
    }

    if (results.length === 0) {
      pushMessage({
        id: `b-${Date.now()}`,
        from: "bot",
        text: "Wah, sepertinya belum ada produk seperti itu 😅 Mau saya tunjukkan kategori lain?",
      });
      return;
    }

    pushMessage({
      id: `b-${Date.now()}`,
      from: "bot",
      text: `Aku temukan ${results.length} produk yang mungkin cocok buat kamu 👇`,
    });
    pushMessage({ id: `b-prod-${Date.now()}`, from: "bot", products: results.slice(0, 6) });
  };

  return (
    <>
      {/* Floating bubble */}
      <div className="fixed right-6 bottom-6 z-50 font-sans">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
            style={{ background: "#ff8a00", color: "white" }}
          >
            💬
          </button>
        )}

        {open && (
          <div className="w-80 h-[420px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-orange-100">
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b bg-orange-50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-400" />
                <div>
                  <div className="font-semibold text-sm text-green-800">Loopify Assistant</div>
                  <div className="text-xs text-gray-500">Asisten belanja preloved</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-sm px-2 py-1 text-gray-600 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Chat area */}
            <div ref={listRef} className="flex-1 p-3 overflow-y-auto space-y-3 bg-white">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl shadow-sm ${m.from === "user" ? "bg-orange-100 text-orange-900" : "bg-green-50 text-green-900"
                      }`}
                  >
                    {m.text && <div>{m.text}</div>}

                    {/* product cards */}
                    <Link to="/products">
                    {m.products && (
                      <div className="mt-2 grid grid-cols-1 gap-2">
                        {m.products.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center gap-3 border rounded-xl p-2 bg-white hover:shadow-md transition-all"
                          >
                            <img
                              src={p.images?.[0] || ""}
                              alt={p.name}
                              className="w-14 h-14 rounded-lg object-cover"
                            />
                            <div className="flex-1 text-sm">
                              <div className="font-semibold">{p.name}</div>
                              <div className="text-gray-600">{formatRp(p.price)}</div>
                              <div className="text-xs text-gray-400">
                                {p.location?.kabupaten}, {p.location?.provinsi}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Input area */}
            <div className="p-3 border-t bg-white">
              <div className="flex items-center gap-2">
                <input
                  className="flex-1 border rounded-xl px-3 py-2 text-sm focus:outline-none"
                  placeholder="Ketik pertanyaan tentang produk preloved..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 flex items-center justify-center rounded-full"
                  style={{ background: "#ff8a00", color: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
