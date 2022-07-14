import { useNavigate } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { usecart } from "./Context/CartContex";
import data from "./data.json";
export const ProductListing = () => {
  const { cartstate, cartDispatch } = usecart();
  const { cart } = cartstate;
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <h1 className="allproduct">All products : {data.length}</h1>
      <div className="product-contianer">
        <div className="main-container">
          {data.length > 0 ? (
            data.map((item) => {
              const isProductincart = cart?.some(
                (items) => items.id == item.id
              );
              return (
                <div key={item.id} className="product-container">
                  <div className="img-container">
                    <img
                      src={item.productImage}
                      alt="productImage"
                      className="image-size"
                    />
                  </div>
                  <div className="product-detail">
                    <p>{item.productName}</p>
                    <p>₹ {item.price}</p>
                    <p>Brand: {item.brand}</p>
                    <p>size: {item.size}</p>
                  </div>
                  {!isProductincart ? (
                    <button
                      className="addtocart-btn"
                      onClick={() =>
                        cartDispatch({ type: "ADD-TO-CART", payload: item })
                      }
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button
                      className="addtocart-btn"
                      onClick={() => navigate("/cartpage")}
                    >
                      Go to cart
                    </button>
                  )}
                </div>
              );
            })
          ) : (
            <h1>No products found</h1>
          )}
        </div>
      </div>
    </>
  );
};
