import actionTypes from '../../store/product/actionTypes';
import { productService } from '../../services/productService';
import history from '../../utils/history';

export const addproductActions = {
  addProduct,
};

function addProduct(product) {
  return (dispatch) => {
    dispatch({ type: actionTypes.ADD_PRODUCT_REQUEST, product: product.title });

    productService.addProduct(product).then(
      (product) => {
        dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, product });
        history.push('/');
      },
      (error) => {
        console.log(error);
        dispatch({ type: actionTypes.ADD_PRODUCT_FAILURE, error });
      }
    );
  };
}
