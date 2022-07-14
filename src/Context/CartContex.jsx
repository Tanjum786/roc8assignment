import { createContext, useContext, useReducer } from "react";
import { cartreducerfun } from "./cartreducerfun";

const cartCreatContext = createContext();
const usecart = () => useContext(cartCreatContext);
const CartProvider = ({ children }) => {
  const [cartstate, cartDispatch] = useReducer(cartreducerfun, {
    cart: [],
    saveLater: []
  });
  return (
    <cartCreatContext.Provider value={{ cartstate, cartDispatch }}>
      {children}
    </cartCreatContext.Provider>
  );
};

export { usecart, CartProvider };
