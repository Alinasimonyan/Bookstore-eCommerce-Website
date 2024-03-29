import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Root } from "./Root";
import { Home } from "./Home";
import { About } from "./About";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { BookList } from "./Books";
import "./App.css";
import { SingleBook } from "./SingleBook";

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/books/:productID" element={<SingleBook />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
