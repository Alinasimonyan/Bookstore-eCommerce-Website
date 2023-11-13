import { createContext, useContext, useReducer } from "react";

const SIDEBAR_OPEN = "SIDERBAR_OPEN";
const SIDEBAR_CLOSE = "SIDERBAR_CLOSE";
const FILTER_SIDEBAR_OPEN = "FILTER_SIDEBAR_OPEN";
const FILTER_SIDEBAR_CLOSE = "FILTER_SIDEBAR_CLOSE";

const SidebarContext = createContext();

const initialState = {
  isSideBarOpen: false,
  isFilterSideBarOpen: false,
};

const reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSideBarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSideBarOpen: false };
  }
  if (action.type === FILTER_SIDEBAR_OPEN) {
    return { ...state, isFilterSideBarOpen: true };
  }
  if (action.type === FILTER_SIDEBAR_CLOSE) {
    return { ...state, isFilterSideBarOpen: false };
  }

  throw new Error(`No matching "${action.type}" - action type `);
};

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSideBar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openFilterSideBar = () => {
    dispatch({ type: FILTER_SIDEBAR_OPEN });
  };
  const closeFilterSideBar = () => {
    dispatch({ type: FILTER_SIDEBAR_CLOSE });
  };
  

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        openSideBar,
        closeSideBar,
        openFilterSideBar,
        closeFilterSideBar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSideBarContext = () => {
  return useContext(SidebarContext);
};
