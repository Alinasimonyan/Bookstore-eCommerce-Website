import { useReducer, useContext, createContext, useEffect } from "react";
import { Products } from "./Products";
const LOAD_PRODUCTS = "LOAD PRODUCTS";
const SET_GRID_VIEW = "SET_GRID_VIEW";
const SET_LIST_VIEW = "SET_LIST_VIEW";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const UPDATE_SORT = "UPDATE_SORT";
const UPDATE_FILTERS = "UPDATE_FILTERS";
const FILTER_PRODUCTS = "FILTER_PRODUCTS";
const CLEAR_FILTERS = "CLEAR_FILTERS";

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: "",
  filters: {
    text: "",
    genre: "All",
    publisher: "All",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LIST_VIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let sorted_products = [];
    if (sort === "price-lowest") {
      sorted_products = filtered_products.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      sorted_products = filtered_products.sort((a, b) => {
        return b.price - a.price;
      });
    }
    return { ...state, filtered_products: sorted_products };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, genre, publisher, price, shipping } = state.filters;
    let tempProducts = [...all_products];

    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.title.toLowerCase().startsWith(text)
      );
    }

    if (genre !== "All") {
      tempProducts = tempProducts.filter((product) => product.genre === genre);
    }

    if (publisher !== "All") {
      tempProducts = tempProducts.filter(
        (product) => product.publisher === publisher
      );
    }

    tempProducts = tempProducts.filter((product) => product.price <= price);

    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        genre: "All",
        publisher: "All",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
};

{
  /* ----------------------------------- CONTEXT--------------------------------------*/
}

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: Products });
  }, [Products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort]);

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "genre") {
      value = e.target.textContent;
    }

    if (name === "price") {
      value = Number(value);
    }

    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
