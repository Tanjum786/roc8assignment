export const Cartbill = ({
  totalPrice,
  priceOfproducts,
  produtDiscount,
  cartLength
}) => {
  return (
    <>
      {cartLength > 0 ? (
        <div className="cartbill-main-container">
          <p className="cartbill-title">Price Details</p>
          <div className="cartbill-container">
            <div>
              <p>Price ({cartLength} items)</p>
              <p>Discount</p>
              <p>DilveryCharges</p>
              <p className="cartbill-price-title">TotalPrice</p>
            </div>
            <div>
              <p>₹{priceOfproducts}</p>
              <p className="color">-₹{produtDiscount}</p>
              <p className="color">Free</p>
              <p className="cartbill-price-title">{totalPrice}</p>
            </div>
          </div>
          <p className="discount-line">
            You will save ₹{produtDiscount} on this order
          </p>
        </div>
      ) : null}
    </>
  );
};
