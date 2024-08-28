import { MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { phoneNumber } from "@/helpers/siteInfo";
import Link from "next/link";

interface AddToCartButtonProps {
  buttonStyle?: string;
}

const AddToCartButton = ({ buttonStyle }: AddToCartButtonProps) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("I would like to ask about this.")}`
  // const url =  `https://wa.me/${phoneNumber}?text=${encodeURIComponent("I would like to ask about this: " + productUrl)}`;
  return (
    <div className="w-full">
      <Link href={url}>
      <Button className={`border bg-white text-primarycol border-primarycol hover:bg-primarycol hover:text-white w-full ${buttonStyle && buttonStyle}`}>
        <div className="relative flex justify-center items-center">
            <div className="flex justify-center items-center">
              <MessageCircle />
            </div>
            <div className="absolute top-2 left-2">
               <Phone  strokeWidth={2}size={8} />
            </div>
        </div>
      </Button>
      </Link>
    </div>
  );
};

export default AddToCartButton;
