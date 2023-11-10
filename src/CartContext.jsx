import { createContext, useContext, useEffect, useReducer } from "react";

const getFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState = {
  cart: getFromLocalStorage,
  shipping_fee: 25,
  total_price: 0,
};

console.log(initialState.cart);
const ADD_TO_CART = "ADD_TO_CART";
const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_CART = "CLEAR_CART";
const CALCULATE_TOTALS = "CALCULATE_TOTALS";

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, product, amount } = action.payload;
    let tempItem = state.cart.find((item) => item.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        const newAmount = cartItem.amount + amount;
        return { ...cartItem, amount: newAmount };
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: product.id,
        author: product.author,
        title: product.title,
        image: product.image,
        price: product.price,
        amount,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_ITEM) {
    const { id } = action.payload;
    const tempCart = state.cart.filter((item) => item.id !== id);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let tempAmount = item.amount + 1;
          return { ...item, amount: tempAmount };
        }
        if (value === "dec") {
          let tempAmount = item.amount - 1;
          return { ...item, amount: tempAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  console.log(state.cart);
  if (action.type === CALCULATE_TOTALS) {
    let total_price = state.cart.reduce((total, item) => {
      total = total + item.amount * item.price;
      return total;
    }, 0);
    if (total_price) {
      return { ...state, total_price };
    } else {
      return { ...state };
    }
  }

  throw new Error(`No matching ${action.type} - action type`);
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, product, amount) => {
    dispatch({ type: ADD_TO_CART, payload: { id, product, amount } });
  };

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, value } });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: CALCULATE_TOTALS });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
