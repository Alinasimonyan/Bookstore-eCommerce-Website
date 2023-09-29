import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FilterProvider } from "./BookReducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <FilterProvider>
      <App />
    </FilterProvider>
  </>
);
