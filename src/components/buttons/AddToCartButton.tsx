import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

interface AddToCartButtonProps {
  buttonStyle?: string;
}

const AddToCartButton = ({buttonStyle }: AddToCartButtonProps) => {
  return (
    <div className="w-full">
      <Button className={`border bg-white text-secondarycol border-secondarycol hover:bg-secondarycol hover:text-white w-full ${buttonStyle && buttonStyle}`}>
        <span className=""><ShoppingBag /></span>
      </Button>
    </div>
  );
};

export default AddToCartButton;
