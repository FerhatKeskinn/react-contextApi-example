import { useReducer } from "react";
import BasketContext from "./BasketContext";
import BasketReducer from "./BasketReducer";

const BasketState = ({ children }) => {
  const initialState = {
    basket: [],
  };

  const [state, dispatch] = useReducer(BasketReducer, initialState);

  const changeBasket = (payload) => {
    dispatch({ type: "CHANGE_BASKET", payload });
  };

  return (
    <BasketContext.Provider
      value={{
        changeBasket,
        basket: state.basket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketState;
