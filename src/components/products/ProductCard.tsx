"use client";

import Link from "next/link";
import AddToCartButton from "../buttons/AddToCartButton";
import WhatsappButton from "../buttons/WhatsappButton";
import ImageCarousel from "../ImageCarousel";
import { useCartStore } from "@/providers/cart-store-provider";
import { Product } from "@/stores/cart-store2";



interface ProductCardProps {
  productInfo: Product;
}

const ProductCard = ({ productInfo }: ProductCardProps) => {
  const { addProductToCart, removeProductFromCart } = useCartStore(
    (state) => state
  );

  return (
    <div>
      <div className="flex flex-col justify-center shadow-md rounded-md">
        <div>
          <Link href={"/productdetail"}>
            <ImageCarousel imageUrls={productInfo.imageUrls} />
          </Link>
        </div>
        <div className="flex flex-col px-2 py-1">
          <div className="flex justify-center">
            <span className="w-full text-gray-600 text-left">
              {productInfo.name}
            </span>
          </div>
          <div className="flex justify-center">
            <span className="w-full text-gray-600 text-left">{`N${productInfo.price}`}</span>
          </div>
          <div className="flex justify-between items-center my-3 w-full">
            <div className="flex justify-center items-center w-[47%]">
              <WhatsappButton />
            </div>
            <div
              className="flex justify-center items-center w-[47%]"
              onClick={() => {
                addProductToCart(productInfo);
              }}
            >
              <AddToCartButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
