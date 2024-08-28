import ProductsGrid from "@/components/home/ProductGrid";
import { Product } from "@/stores/cart-store2";


const imageUrls = [
  "/assets/images/laptop2.jpg",
  "/assets/images/laptop3.jpg",
  "/assets/images/laptop4.jpg",
  "/assets/images/laptop5.jpg",
  "/assets/images/laptop6.jpg",
];

const productList: Product[] = [
  {
    productId: "11",
    name: "Dell Laptop",
    imageUrls,
    price: 200000,
  },
  {
    productId: "12",
    name: "Microsoft Laptop Pad",
    imageUrls,
    price: 600000,
  },
  {
    productId: "13",
    name: "Toshiba Laptop",
    imageUrls,
    price: 80000,
  },
  {
    productId: "14",
    name: "HP Laptop",
    imageUrls,
    price: 540000,
  },
  {
    productId: "15",
    name: "HP Laptop Adapter",
    imageUrls,
    price: 90000,
  },
  {
    productId: "16",
    name: "Dell Laptop Screen",
    imageUrls,
    price: 700000,
  },
  {
    productId: "17",
    name: "Dell Laptop",
    imageUrls,
    price: 100000,
  },
];

export default function Home() {
  return (
    <main className="">
      <div className="flex">
        <ProductsGrid productList={productList} />
      </div>
    </main>
  );
}
