import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { usecart } from "../Context/CartContex";
export const Navbar = () => {
  const { cartstate } = usecart();
  const { cart, saveLater } = cartstate;
  const navigate = useNavigate();
  console.log(saveLater, "from");
  return (
    <div className="navbar-container">
      <h1 className="nav-title" onClick={() => navigate("/")}>
        Flipkart
      </h1>
      <div className="btn-container">
        <button className="cart-btn" onClick={() => navigate("/cartpage")}>
          <AiOutlineShoppingCart />
        </button>
        {cart.length >= 1 ? (
          <span className="icon-badge">{cart?.length}</span>
        ) : null}
      </div>
    </div>
  );
};
