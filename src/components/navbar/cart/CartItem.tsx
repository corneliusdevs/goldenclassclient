import ImageCarousel from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/providers/cart-store-provider";
import { type CartItem } from "@/stores/cart-store2";
import { Minus, Plus, Trash, Trash2 } from "lucide-react";
import React from "react";

interface CartItemProps {
  productInfo: CartItem;
}

const CartItemComponent = ({ productInfo }: CartItemProps) => {
  const { removeProductFromCart, increaseProductCount, decreaseProductCount } =
    useCartStore((state) => state);

  return (
    <div className="w-full">
      <div className="w-full border-b border-gray-200 flex items-center">
        <div className="w-[30%]">
          <ImageCarousel imageUrls={productInfo.product.imageUrls} />
        </div>
        <div className="flex flex-col mx-3 overflow-hidden h-full w-[30%] mr-2">
          {/* Produt details including remove from cart */}
          <div className="">
            {/* product details */}
            <span className="break-all max-w-[100px] text-gray-600">
              {productInfo.product.name}
            </span>
          </div>
          <div className="flex items-center py-1 w-full justify-between max-w-44">
            <div className="text-gray-700">{productInfo.product.price}</div>

            {/* remove from cart delete Icon */}
            <div
              className="flex justify-center items-center mr-3"
              onClick={() => {
                removeProductFromCart(productInfo.product.productId, productInfo.count);
              }}
            >
              <Trash2 className="text-gray-600 hover:text-red-500" />
            </div>
          </div>

          <div className="flex items-center mt-2">
            {/* Controls for addding or subtracting the number of items */}
            <Button
              className="p-0 px-3"
              variant={"secondary"}
              onClick={() => {
                decreaseProductCount(productInfo.product.productId);
              }}
            >
              <Minus />
            </Button>
            <div className="w-[30px] h-[20px] flex justify-center items-center">
              {productInfo.count}
            </div>
            <Button
              className="p-0 px-3"
              variant={"secondary"}
              onClick={() => {
                increaseProductCount(productInfo.product.productId);
              }}
            >
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
