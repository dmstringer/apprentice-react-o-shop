/* eslint-disable import/no-anonymous-default-export */
import actions from '../../store/product/actionTypes';

let products = JSON.parse(localStorage.getItem('products'));
const initialState = products ? { products } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_PRODUCT_REQUEST:
      return {
        adding: true,
        product: action.product,
      };
    case actions.ADD_PRODUCT_SUCCESS:
      return {
        added: true,
        product: action.product,
      };
    case actions.ADD_PRODUCT_FAILURE:
      return {};
    default:
      return state;
  }
};
