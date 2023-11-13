import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FilterProvider } from "./BookReducer";
import { CartProvider } from "./CartContext";
import { SidebarProvider } from "./SidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <FilterProvider>
      <SidebarProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SidebarProvider>
    </FilterProvider>
  </>
);
