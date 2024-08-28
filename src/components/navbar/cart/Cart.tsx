import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCartStore } from "@/providers/cart-store-provider";
import CartItemComponent from "./CartItem";

interface CartProps {

}

const Cart = () => {
  const {cart} = useCartStore((state)=>(state))
  return (
    <div>
      <div>
        <ScrollArea className="w-full h-[65vh] my-4">
          <div>
             {
              cart.products.map((product, index)=>{
                return <CartItemComponent productInfo={product} key={product.product.productId + "item " + index}/>
              })
             }
          </div>
        </ScrollArea>
      </div>
      <div className="w-full"><Button className="w-full bg-secondarycol" >Order</Button></div>
    </div>
  );
};

export default Cart;
