import { ADD_TO_LIST } from "./ListTypes.js";


const ListReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      if (!state.list.find((item) => item.id === action.payload.id)) {
        state.list.push({
          ...action.payload,
        });
      }

      return {
        list: [...state.list],
      };

    default:
      return state;
  }
};

export default ListReducer;
