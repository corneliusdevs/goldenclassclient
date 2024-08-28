"use client"

import { type ReactNode, createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { type CartStore, createCartStore, initCartStore } from "@/stores/cart-store2"

export type CartStoreApi = ReturnType<typeof createCartStore>

export const CartStoreContext = createContext<CartStoreApi |undefined> (undefined);

export interface CartStateProviderProps {
    children: ReactNode
}

export const CartStoreProvider = ({
    children
}: CartStateProviderProps)=>{
    const storeRef = useRef<CartStoreApi>()

    if(!storeRef.current){
      storeRef.current = createCartStore(initCartStore())
    }

    return (
        <CartStoreContext.Provider value={storeRef.current}>
        {children}
      </CartStoreContext.Provider> 
    )
}


export const useCartStore = <T,>(
    selector: (store: CartStore)=> T,
): T =>{
    const cartStoreContext = useContext(CartStoreContext);

    if(!cartStoreContext){
        throw new Error(`useCartStore must be used within CartStoreProvider`)
    }

    return useStore(cartStoreContext, selector)
}