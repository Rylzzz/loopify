import { Product } from "@/types/product";
import baju1 from "@/assets/products/baju-1.jpg";
import baju2 from "@/assets/products/baju-2.jpg";
import baju3 from "@/assets/products/baju-3.jpg";
import celana1 from "@/assets/products/celana-1.jpg";
import celana2 from "@/assets/products/celana-2.jpg";
import celana3 from "@/assets/products/celana-3.jpg";
import buku1 from "@/assets/products/buku-1.jpg";
import buku2 from "@/assets/products/buku-2.jpg";
import buku3 from "@/assets/products/buku-3.jpg";
import elektronik1 from "@/assets/products/elektronik-1.jpg";
import elektronik2 from "@/assets/products/elektronik-2.jpg";
import elektronik3 from "@/assets/products/elektronik-3.jpg";
import gadget1 from "@/assets/products/gadget-1.jpg";
import gadget2 from "@/assets/products/gadget-2.jpg";
import gadget3 from "@/assets/products/gadget-3.jpg";
import sepatu1 from "@/assets/products/sepatu-1.jpg";
import sepatu2 from "@/assets/products/sepatu-2.jpg";
import sepatu3 from "@/assets/products/sepatu-3.jpg";

export const products: Product[] = [
  // Baju
  {
    id: "1",
    name: "Kemeja Flanel Kotak-Kotak",
    price: 85000,
    description: "Kemeja flanel motif kotak, kondisi 90%, nyaman dipakai",
    descriptionLong: "Kemeja flanel dengan motif kotak-kotak klasik. Bahan cotton yang nyaman dan masih sangat layak pakai. Cocok untuk gaya casual sehari-hari. Kondisi 90%, tidak ada noda atau kerusakan. Ukuran M fit to L.",
    category: "Baju",
    location: {
      kabupaten: "Bandung",
      provinsi: "Jawa Barat"
    },
    images: [baju1, baju1],
    sellerPhone: "6285173003528"
  },
  {
    id: "2",
    name: "Jaket Denim Vintage",
    price: 150000,
    description: "Jaket denim vintage, warna biru klasik, kondisi prima",
    descriptionLong: "Jaket denim vintage dengan warna biru klasik yang timeless. Material tebal dan berkualitas. Sudah di-wash berkali-kali sehingga lebih lembut. Kondisi sangat baik tanpa sobek atau noda. Ukuran L.",
    category: "Baju",
    location: {
      kabupaten: "Jakarta Selatan",
      provinsi: "DKI Jakarta"
    },
    images: [baju2, baju2],
    sellerPhone: "628234567890"
  },
  {
    id: "3",
    name: "Kaos Band Vintage",
    price: 75000,
    description: "Kaos band original vintage, rare item",
    descriptionLong: "Kaos band original dari era 90-an. Item langka untuk kolektor. Sablon masih bagus dan warna tidak luntur. Bahan cotton yang nyaman. Kondisi 85%, ada sedikit fading yang natural. Ukuran M.",
    category: "Baju",
    location: {
      kabupaten: "Yogyakarta",
      provinsi: "DI Yogyakarta"
    },
    images: [baju3, baju3],
    sellerPhone: "628345678901"
  },

  //Celana
  {
    id: "4",
    name: "Jeans Levi's 501 Original",
    price: 200000,
    description: "Celana jeans Levi's 501 original, warna indigo",
    descriptionLong: "Celana jeans Levi's 501 original dengan warna indigo klasik. Authentic product dengan kualitas terjamin. Sudah di-break in sehingga nyaman dipakai. Model straight leg yang timeless. Kondisi 90%, ukuran W32 L34.",
    category: "Celana",
    location: {
      kabupaten: "Surabaya",
      provinsi: "Jawa Timur"
    },
    images: [celana1, celana1],
    sellerPhone: "628456789012"
  },
  {
    id: "5",
    name: "Celana Cargo Warna Khaki",
    price: 95000,
    description: "Celana cargo multi-pocket, warna khaki, praktis",
    descriptionLong: "Celana cargo dengan banyak kantong yang praktis. Warna khaki yang versatile dan mudah dipadukan. Bahan canvas yang kuat dan tahan lama. Kondisi sangat baik 95%. Ukuran 30.",
    category: "Celana",
    location: {
      kabupaten: "Semarang",
      provinsi: "Jawa Tengah"
    },
    images: [celana2, celana2],
    sellerPhone: "628567890123"
  },

  // Sepatu
  {
    id: "6",
    name: "Sneakers Converse All Star",
    price: 180000,
    description: "Converse All Star hitam klasik, masih mulus",
    descriptionLong: "Sepatu Converse All Star warna hitam klasik. Model low-top yang iconic. Kondisi masih sangat bagus, sol belum tipis, canvas masih kencang. Cocok untuk casual wear. Ukuran 42.",
    category: "Sepatu",
    location: {
      kabupaten: "Bekasi",
      provinsi: "Jawa Barat"
    },
    images: [sepatu1, sepatu1],
    sellerPhone: "628678901234"
  },
  {
    id: "7",
    name: "Boots Kulit Cokelat",
    price: 250000,
    description: "Sepatu boots kulit asli, warna cokelat, elegant",
    descriptionLong: "Sepatu boots dari kulit asli berkualitas tinggi. Warna cokelat yang classic dan elegant. Cocok untuk formal maupun smart casual. Sudah di-polish dan di-rawat dengan baik. Kondisi 85%, ukuran 43.",
    category: "Sepatu",
    location: {
      kabupaten: "Tangerang",
      provinsi: "Banten"
    },
    images: [sepatu2, sepatu2],
    sellerPhone: "628789012345"
  },
  {
    id: "8",
    name: "Sandal Birkenstock Arizona",
    price: 350000,
    description: "Sandal Birkenstock original, sangat nyaman",
    descriptionLong: "Sandal Birkenstock Arizona original dengan footbed yang iconic dan sangat nyaman. Sudah mold sesuai bentuk kaki sehingga semakin nyaman. Kondisi 80%, masih sangat layak pakai. Ukuran 41.",
    category: "Sepatu",
    location: {
      kabupaten: "Denpasar",
      provinsi: "Bali"
    },
    images: [sepatu3, sepatu3],
    sellerPhone: "628890123456"
  },

  // Elektronik
  {
    id: "9",
    name: "Speaker Bluetooth JBL",
    price: 300000,
    description: "Speaker JBL Flip 4, suara mantap, baterai awet",
    descriptionLong: "Speaker bluetooth JBL Flip 4 dengan kualitas suara yang excellent. Baterai masih awet bisa sampai 10 jam. Waterproof IPX7. Kondisi fisik 85%, ada beberapa goresan kecil tapi tidak mengganggu fungsi. Termasuk kabel charger.",
    category: "Elektronik",
    location: {
      kabupaten: "Malang",
      provinsi: "Jawa Timur"
    },
    images: [elektronik1, elektronik1],
    sellerPhone: "628901234567"
  },
  {
    id: "10",
    name: "Kamera Digital Canon",
    price: 1500000,
    description: "Kamera Canon PowerShot, cocok untuk pemula",
    descriptionLong: "Kamera digital Canon PowerShot G7X Mark II. Sensor 1 inch untuk hasil foto berkualitas. Cocok untuk content creator pemula. Kondisi 90%, sensor bersih, LCD normal. Termasuk charger, baterai, dan tas kamera.",
    category: "Elektronik",
    location: {
      kabupaten: "Bandung",
      provinsi: "Jawa Barat"
    },
    images: [elektronik2, elektronik2],
    sellerPhone: "629012345678"
  },

  // Buku
  {
    id: "11",
    name: "Novel Harry Potter Set",
    price: 450000,
    description: "Set lengkap novel Harry Potter bahasa Indonesia",
    descriptionLong: "Set lengkap 7 buku Harry Potter edisi bahasa Indonesia. Kondisi buku sangat baik, tidak ada halaman robek atau coretan. Cover masih bagus dan rapi. Cocok untuk koleksi atau hadiah. Edisi original dari Gramedia.",
    category: "Buku",
    location: {
      kabupaten: "Jakarta Pusat",
      provinsi: "DKI Jakarta"
    },
    images: [buku1, buku1],
    sellerPhone: "629123456789"
  },
  {
    id: "12",
    name: "Buku Bisnis 'Good to Great'",
    price: 75000,
    description: "Buku bisnis klasik Good to Great, kondisi bagus",
    descriptionLong: "Buku bisnis bestseller 'Good to Great' oleh Jim Collins. Edisi bahasa Inggris. Buku dalam kondisi baik, tidak ada halaman rusak. Sedikit bekas lipatan di cover. Wajib baca untuk entrepreneur dan business leaders.",
    category: "Buku",
    location: {
      kabupaten: "Surabaya",
      provinsi: "Jawa Timur"
    },
    images: [buku2, buku2],
    sellerPhone: "629234567890"
  },

  // Gadget
  {
    id: "13",
    name: "iPhone 11 64GB",
    price: 3500000,
    description: "iPhone 11 warna hitam, fullset, battery health 85%",
    descriptionLong: "iPhone 11 64GB warna hitam dalam kondisi sangat baik. Battery health 85%. Fullset dengan box, charger, dan earphone original. Tidak ada minus, LCD normal, face ID normal. iCloud clear dan siap pakai. Sudah termasuk case dan tempered glass.",
    category: "Gadget",
    location: {
      kabupaten: "Jakarta Selatan",
      provinsi: "DKI Jakarta"
    },
    images: [gadget1, gadget1],
    sellerPhone: "629345678901"
  },
  {
    id: "14",
    name: "iPad Air 3 WiFi 64GB",
    price: 4200000,
    description: "iPad Air generasi 3, cocok untuk kerja dan kuliah",
    descriptionLong: "iPad Air 3rd generation WiFi only 64GB. Layar 10.5 inch yang luas dan nyaman. Support Apple Pencil generasi 1. Kondisi mulus 90%, tidak ada dead pixel atau goresan pada layar. Fullset dengan charger original. Battery health masih excellent.",
    category: "Gadget",
    location: {
      kabupaten: "Bandung",
      provinsi: "Jawa Barat"
    },
    images: [gadget2, gadget2],
    sellerPhone: "629456789012"
  },
  {
    id: "15",
    name: "Samsung Galaxy Buds+",
    price: 850000,
    description: "Earbuds TWS Samsung, suara jernih, baterai awet",
    descriptionLong: "Samsung Galaxy Buds+ warna putih. True wireless earbuds dengan kualitas suara yang excellent. Noise cancellation yang baik. Baterai awet bisa sampai 11 jam. Kondisi 90%, fullset dengan charging case, kabel USB-C, dan ear tips berbagai ukuran.",
    category: "Gadget",
    location: {
      kabupaten: "Yogyakarta",
      provinsi: "DI Yogyakarta"
    },
    images: [gadget3, gadget3],
    sellerPhone: "629567890123"
  },
];
