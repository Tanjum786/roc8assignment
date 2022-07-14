export const Savelatercard = ({ item, cartDispatch }) => {
  return (
    <>
      <div className="cart-container">
        <div className="img-container cart-image-container">
          <img
            src={item.productImage}
            alt="productImage"
            className="image-size cart-image"
          />
        </div>
        <div>
          <p className="cart-product-title">{item.productName}</p>
          <div className="cart-detail">
            <p>₹{item.price}</p>
            <p className="discount-price">50% off</p>
          </div>
          <div
            className="cart-qunt-co
          ntainer"
          >
            <button
              className="qunt-btn"
              onClick={() => cartDispatch({ type: "DECREMENT", payload: item })}
              disabled
            >
              -
            </button>
            <span>{item.qunty}</span>
            <button
              className="qunt-btn"
              onClick={() => cartDispatch({ type: "Increment", payload: item })}
              disabled
            >
              +
            </button>
          </div>
          <button
            className="cart-btns"
            onClick={() =>
              cartDispatch({ type: "MOVE-TO-CART", payload: item })
            }
          >
            Move to cart
          </button>
          <button
            className="cart-btns remove-btn"
            onClick={() =>
              cartDispatch({ type: "REMOVE-FROM-SAVELATER", payload: item })
            }
          >
            Remove Item
          </button>
        </div>
      </div>
    </>
  );
};
