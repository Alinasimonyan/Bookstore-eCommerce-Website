import { createContext, useContext, useReducer } from "react";

const SIDEBAR_OPEN = "SIDERBAR_OPEN";
const SIDEBAR_CLOSE = "SIDERBAR_CLOSE";

const SidebarContext = createContext();

const initialState = {
  isSideBarOpen: false,
};

const reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSideBarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSideBarOpen: false };
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

  return (
    <SidebarContext.Provider
      value={{
        ...state,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSideBarContext = () => {
  return useContext(SidebarContext);
};
