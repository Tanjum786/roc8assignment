export const Cartcard = ({ cartproduct, cartDispatch }) => {
  return (
    <>
      <div className="cart-container">
        <div className="img-container cart-image-container">
          <img
            src={cartproduct.productImage}
            alt="productImage"
            className="image-size cart-image"
          />
        </div>
        <div>
          <p className="cart-product-title">{cartproduct.productName}</p>
          <div className="cart-detail">
            <p>₹{cartproduct.price}</p>
            <p className="discount-price">50% off</p>
          </div>
          <div className="cart-qunt-container">
            <button
              className="qunt-btn"
              onClick={() =>
                cartDispatch({ type: "DECREMENT", payload: cartproduct })
              }
            >
              -
            </button>
            <span>{cartproduct.qunty}</span>
            <button
              className="qunt-btn"
              onClick={() =>
                cartDispatch({ type: "Increment", payload: cartproduct })
              }
            >
              +
            </button>
          </div>
          <button
            className="cart-btns"
            onClick={() =>
              cartDispatch({ type: "SAVE-LETER", payload: cartproduct })
            }
          >
            Save for later
          </button>
          <button
            className="cart-btns remove-btn"
            onClick={() =>
              cartDispatch({ type: "REMOVE-FROM-CART", payload: cartproduct })
            }
          >
            Remove item
          </button>
        </div>
      </div>
    </>
  );
};
