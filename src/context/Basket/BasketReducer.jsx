import { CHANGE_BASKET } from "./BasketTypes.js";


const BasketReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_BASKET:

      //varlık kontrolü
      const entityOccurrence = state.basket.find(item => item.NID === action.payload.NID)

      if(!entityOccurrence) {
        state.basket = [...state.basket, action.payload]
      } else {
        if(entityOccurrence.index === action.payload.index) {
          state.basket = [...state.basket.filter(item => item.NID !== action.payload.NID)]
        } else {
          state.basket = [...state.basket.filter(item => item.NID !== action.payload.NID), action.payload]
        }
      }



      return {
        basket: state.basket,
      };

    default:
      return state;
  }
};

export default BasketReducer;
