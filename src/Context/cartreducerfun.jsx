export const cartreducerfun = (cartstate, cartaction) => {
  const { cart, saveLater } = cartstate;
  console.log(cartstate.saveLater);
  const cartfilter = cart.filter((item) => item.id !== cartaction.payload.id);
  const savelaterFilter = saveLater.filter(
    (item) => item.id !== cartaction.payload.id
  );
  switch (cartaction.type) {
    case "ADD-TO-CART":
      const cartfind = cart?.some((item) => item.id === cartaction.payload.id);
      if (cartfind) {
        return { ...cartstate };
      } else {
        return {
          ...cartstate,
          cart: [...cart, cartaction.payload]
        };
      }
    case "REMOVE-FROM-CART":
      return {
        ...cartstate,
        cart: cartfilter
      };
    case "SAVE-LETER":
      return {
        ...cartstate,
        cart: cartfilter,
        saveLater: [...saveLater, cartaction.payload]
      };

    case "Increment":
      return {
        ...cartstate,
        cart: cart.map((item) =>
          item.id === cartaction.payload.id
            ? { ...item, qunty: item.qunty + 1 }
            : item
        )
      };
    case "DECREMENT":
      return {
        ...cartstate,
        cart: cart.map((item) =>
          item.id === cartaction.payload.id
            ? { ...item, qunty: item.qunty > 1 ? item.qunty - 1 : item.qunty }
            : item
        )
      };
    case "MOVE-TO-CART":
      const cartProductfind = cart.some(
        (item) => item.id === cartaction.payload.id
      );
      if (cartProductfind) {
        return {
          ...cartstate,
          saveLater: savelaterFilter
        };
      }
      return {
        ...cartstate,
        cart: [...cart, cartaction.payload],
        saveLater: savelaterFilter
      };
    case "REMOVE-FROM-SAVELATER":
      return {
        ...cartstate,
        saveLater: savelaterFilter
      };

    default:
      return cartstate;
  }
};
