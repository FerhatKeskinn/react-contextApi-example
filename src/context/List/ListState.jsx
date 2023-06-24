import { useReducer } from "react";
import ListContext from "./ListContext";
import ListReducer from "./ListReducer";
import mock from "./mock";

const ListState = ({ children }) => {
  const initialState = {
    list: mock,
  };

  const [state, dispatch] = useReducer(ListReducer, initialState);

  const addToList = (payload) => {
    dispatch({ type: "ADD_TO_LIST", payload });
  };

  return (
    <ListContext.Provider
      value={{
        items: state.list,
        addToList,
        ...state,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListState;
