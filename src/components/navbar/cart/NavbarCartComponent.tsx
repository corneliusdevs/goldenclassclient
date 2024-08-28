import SlideInMenu from "@/components/SlideInMenu";
import ShopCartSlideInMenuContent from "./ShoppingCartSlideInMenuComponent";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/providers/cart-store-provider";

interface NavbarCartProps {}

const NavbarCartComponent = () => {
  let { totalProductCount } = useCartStore((state) => state.cart);

  return (
    <div className="ml-4 mr-2 text-gray-500">
      <SlideInMenu
        direction="bottom"
        title={`Cart(${totalProductCount})`}
        mainContentComponent={<ShopCartSlideInMenuContent />}
        triggerComponent={
          <div className="relative flex flex-col items-center justify-center">
            <div className="flex justify-center items-center">
              <ShoppingBag
                strokeWidth={1}
                className="bg-white rounded-tr-2xl"
              />
            </div>
            <div className="absolute top-[-8px] right-[-14px]">
              <Badge
                variant={"outline"}
                className="bg-secondarycol rounded-full max-w-[28px] h-[18px] flex  justify-center items-center py-[9px] px-2 text-white"
              >
                <span className="text-[12px]">{totalProductCount}</span>
              </Badge>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default NavbarCartComponent;
