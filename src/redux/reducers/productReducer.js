import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const productInCartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, payload];
    case ActionTypes.REMOVE_FROM_CART:
      let idx = -1;
      state.find(function (item, i) {
        if (item.id === payload) {
          idx = i;
        }
      });
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    default:
      return state;
  }
};
