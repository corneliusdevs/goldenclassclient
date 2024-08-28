import { Product } from "@/stores/cart-store2";
import ProductCard from "../products/ProductCard";



interface ProductsGridProps {
  productList: Product[];
}

const ProductsGrid = ({ productList }: ProductsGridProps) => {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 px-2 py-2 gap-x-2 gap-y-2">
        {productList.map((productInfo, index) => {
          return (
            <div key={productInfo.productId + index}>
              <ProductCard productInfo={productInfo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;
