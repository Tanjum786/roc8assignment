import { Route, Routes } from "react-router-dom";
import { CartPage } from "./CartPage";
import { ProductListing } from "./Productlisting";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </div>
  );
}
