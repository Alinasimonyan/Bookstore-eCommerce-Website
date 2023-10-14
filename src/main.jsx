import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FilterProvider } from "./BookReducer";
import { CartProvider } from "./CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </>
);
