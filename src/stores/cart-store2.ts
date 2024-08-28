import CartItem from "@/components/navbar/cart/CartItem";
import { createStore } from "zustand/vanilla";

export type Product = {
  productId: string;
  name: string;
  imageUrls: string[];
  price: number;
};

export type CartItem = {
  product: Product;
  count: number;
};

export type CartState = {
  cart: {
    products: CartItem[];
    totalProductCount: number;
  };
};

export type CartActions = {
  addProductToCart: (productItem: Product) => void;
  removeProductFromCart: (productId: string, productCount:number) => void;
  increaseProductCount: (productId: string) => void;
  decreaseProductCount: (productId: string) => void;
  clearClart: () => void;
};

export type CartStore = CartState & CartActions;

// will be usefull if you are fetching stored products from localstorage or anything like data fetching to an api end point
export const initCartStore = (): CartState => {
  return {
    cart: {
      products: [],
      totalProductCount: 0,
    },
  };
};

const removeProductFromCartHandler = (
  itemsInCart: CartItem[],
  productId: string
) => {
  let itemsInCartCopy = [...itemsInCart];

  for (let i = 0; i < itemsInCartCopy.length; i++) {
    // if the product is already in the cart,
    if (itemsInCartCopy[i].product.productId === productId) {
      // remove the item from the cart
      itemsInCartCopy.splice(i, 1);

      //  if the item is in the cart, break out of the loop
      break;
    }
  }

  return itemsInCartCopy;
};

const addProductToCartHandler = (
  itemsInCart: CartItem[],
  productToBeAddedToCart: Product
) => {
  const itemsInCartCopy = [...itemsInCart];
  let isItemInCart = false;
  for (let i = 0; i < itemsInCartCopy.length; i++) {
    // if the product is already in the cart, increase the count
    if (
      itemsInCartCopy[i].product.productId === productToBeAddedToCart.productId
    ) {
      itemsInCartCopy[i] = {
        ...itemsInCartCopy[i],
        count: itemsInCartCopy[i].count++, // increase the count
      };

      isItemInCart = true;
      //  if the item is in the cart, break out of the loop
      break;
    }
  }

  // if the item is not in the cart, add it to the copy of the cart
  if (!isItemInCart) {
    itemsInCartCopy.push({
      product: productToBeAddedToCart,
      count: 1,
    });
  }

  return itemsInCartCopy;
};

const increaseProductCountHandler = (
  itemsInCart: CartItem[],
  productId: string
) => {
  let itemsInCartCopy = [...itemsInCart];

  for (let i = 0; i < itemsInCartCopy.length; i++) {
    // if the product is already in the cart,
    if (itemsInCartCopy[i].product.productId === productId) {
      // remove the item from the cart
      itemsInCartCopy[i] = {
        ...itemsInCartCopy[i],
        count: itemsInCartCopy[i].count + 1
      }

      //  if the item is in the cart, break out of the loop
      break;
    }
  }

  return itemsInCartCopy;
};

const decreaseProductCountHandler = (
  itemsInCart: CartItem[],
  productId: string
) => {
  let itemsInCartCopy = [...itemsInCart];

  for (let i = 0; i < itemsInCartCopy.length; i++) {
    // if the product is already in the cart,
    if (itemsInCartCopy[i].product.productId === productId) {
      // reduce  the product count by 1
      itemsInCartCopy[i] = {
        ...itemsInCartCopy[i],
        // only decrease the product count if it is greater than zero to avoid negative numbers
        count: itemsInCartCopy[i].count > 0 ? itemsInCartCopy[i].count - 1 : 0 
      }

      //  if the item is in the cart, break out of the loop
      break;
    }
  }

  return itemsInCartCopy;
};

export const defaultInitState: CartState = {
  cart: {
    products: [],
    totalProductCount: 0,
  },
};

export const createCartStore = (initState: CartState = defaultInitState) => {
  return createStore<CartStore>()((set) => ({
    ...initState,
    addProductToCart: (productToBeAdded: Product) =>
      set((state) => ({
        cart: {
          totalProductCount: state.cart.totalProductCount + 1,
          products: [
            ...addProductToCartHandler(state.cart.products, productToBeAdded),
          ],
        },
      })),
    removeProductFromCart: (productId: string, productCount:number) =>
      set((state) => ({
        cart: {
          totalProductCount: state.cart.totalProductCount - productCount,
          products: [
            ...removeProductFromCartHandler(state.cart.products, productId),
          ],
        },
      })),
    increaseProductCount: (productId: string) =>
      set((state) => ({
        cart: {
          totalProductCount: state.cart.totalProductCount + 1,
          products: [
            ...increaseProductCountHandler(state.cart.products, productId),
          ],
        },
      })),
    decreaseProductCount: (productId: string) =>
      set((state) => ({
        cart: {
          totalProductCount:
            state.cart.totalProductCount > 0
              ? state.cart.totalProductCount - 1
              : 0, // if total product count is greater than zero, decrease totalProductCount by one else return zero to avoid negative deductions...
          products: [
            ...decreaseProductCountHandler(state.cart.products, productId),
          ],
        },
      })),
    clearClart: () => {},
  }));
};
