export const cartreducerfun = (cartstate, cartaction) => {
  const { cart, saveLater } = cartstate;
  console.log(cartstate.saveLater);
  const cartfilter = cart.filter((item) => item.id !== cartaction.payload.id);
  switch (cartaction.type) {
    case "ADD-TO-CART":
      const cartfind = cart?.some((item) => item.id === cartaction.payload.id);
      if (cartfind) {
        return cart;
      } else {
        return {
          cart: [...cart, cartaction.payload]
        };
      }
    case "REMOVE-FROM-CART":
      return {
        ...cartstate,
        cart: cartfilter
      };
    case "SAVE-LETER":
      const productFind = saveLater?.some(
        (item) => item.id === cartaction.payload.id
      );
      if (productFind) {
        return {
          ...cartstate,
          cart: cart.filter((item) => item.id !== cartaction.payload.id)
        };
      }
      return {
        ...cartstate,
        cart: cart.filter((item) => item.id !== cartaction.payload.id)
        // saveLater: [...saveLater, cartaction.payload]
      };

    case "Increment":
      return {
        cart: cart.map((item) =>
          item.id === cartaction.payload.id
            ? { ...item, qunty: item.qunty + 1 }
            : item
        )
      };
    case "DECREMENT":
      return {
        cart: cart.map((item) =>
          item.id === cartaction.payload.id
            ? { ...item, qunty: item.qunty > 1 ? item.qunty - 1 : item.qunty }
            : item
        )
      };

    default:
      return cartstate;
  }
};
