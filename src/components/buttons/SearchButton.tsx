import { Search } from "lucide-react";
import { Button } from "../ui/button";

interface SearchButtonProps {
  buttonStyle?: string;
}

const SearchButton = ({ buttonStyle }: SearchButtonProps) => {
  return (
    <div>
      <Button className={`bg-secondarycol h-fit px-2 ${buttonStyle && buttonStyle}`}>
        <span className=""><Search strokeWidth={1.2} size={18} /></span>
      </Button>
    </div>
  );
};

export default SearchButton;
