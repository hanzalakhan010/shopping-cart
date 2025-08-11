import type React from "react";
import { useState, type SetStateAction, createContext } from "react";

interface Item {
  id: number,
  name: string,
  description: string,
  price: number,
  rating: number,
  image: string
}

interface CartContextType {
  cartItems: Item[];
  setCartItems: React.Dispatch<SetStateAction<Item[]>>;
}

// ✅ Give createContext a generic type and matching default
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => { },
});

const CartContextComponent = ({ children }: { children: React.ReactNode }) => {
  // ✅ Explicitly tell useState what type of array it holds
  const [cartItems, setCartItems] = useState<Item[]>([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextComponent;
















// import type React from "react"
// import { useState, type SetStateAction } from "react"
// import { createContext } from "react"

// interface Item { }

// interface CartContextType {
//     cartItems: Item[]
//     setCartItems: React.Dispatch<SetStateAction<Item[]>>
// }


// export const CartContext = createContext({
//     cartItems: [],
//     setCartItems: () => { }
// })

// const CartContextComponent = ({ children }: { children: React.ReactNode }) => {
//     const [cartItems, setCartItems] = useState([])
//     return (
//         <CartContext.Provider value={{ cartItems, setCartItems }}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartContextComponent
