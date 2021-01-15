import handleResponse from '../services/handleResponse';

export const productService = {
  addProduct,
};

function addProduct(product) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  };

  return fetch('/products/add', requestOptions)
    .then(handleResponse)
    .catch((error) => {
      console.error('Error:', error);
    });
}
