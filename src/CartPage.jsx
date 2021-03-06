import { Cartbill } from "./component/Cartbill";
import { Cartcard } from "./component/CartCard";
import { Navbar } from "./component/Navbar";
import { Savelatercard } from "./component/Savelatercard";
import { usecart } from "./Context/CartContex";

export const CartPage = () => {
  const { cartstate, cartDispatch } = usecart();
  const { cart, saveLater } = cartstate;
  const priceOfproducts = cart.reduce(
    (sum, item) => item.price * item.qunty + sum,
    0
  );
  const produtDiscount = (priceOfproducts * 50) / 100;
  const totalPrice = priceOfproducts - produtDiscount;
  return (
    <>
      <Navbar />
      <h1 className="allproduct">My cart : {cart?.length}</h1>
      {cart.length >= 1 ? (
        <div className="cartcontainer">
          <div className="cart-main-container">
            {cart?.map((cartproduct) => {
              return (
                <Cartcard
                  cartproduct={cartproduct}
                  cartDispatch={cartDispatch}
                />
              );
            })}
          </div>
          <Cartbill
            totalPrice={totalPrice}
            produtDiscount={produtDiscount}
            priceOfproducts={priceOfproducts}
            cartLength={cart.length}
          />
        </div>
      ) : (
        <h1 className="allproduct">Missing Cart items?</h1>
      )}
      {saveLater.length >= 1 ? (
        <>
          <h1 className="savelater-title">
            save for later : ({saveLater?.length})
          </h1>
          <div className="cart-main-container savelater-container">
            {saveLater.map((item) => {
              return <Savelatercard item={item} cartDispatch={cartDispatch} />;
            })}
          </div>
        </>
      ) : null}
    </>
  );
};
