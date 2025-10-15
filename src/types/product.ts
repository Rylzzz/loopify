export type Category = "Baju" | "Celana" | "Sepatu" | "Elektronik" | "Buku" | "Gadget";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  descriptionLong: string;
  category: Category;
  location: {
    kabupaten: string;
    provinsi: string;
  };
  images: string[];
  sellerPhone: string;
}
