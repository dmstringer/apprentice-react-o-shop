import React, { useState } from 'react';
import { addproductActions } from '../store/product/actions';
import { useDispatch } from 'react-redux';

function NewProduct() {
  const [inputs, setInputs] = useState({
    title: '',
    price: '',
    category: '',
    imageURL: '',
  });

  const { title, price, category, imageURL } = inputs;

  const formValues = ['Title', 'Price', 'Category', 'Image URL'];

  const optionValues = [
    { name: 'Bread', id: 'bread' },
    { name: 'Vegetables', id: 'vegetables' },
    { name: 'Fruits', id: 'fruits' },
    { name: 'Dairy', id: 'dairy' },
  ];

  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (title && price && category && imageURL) {
      dispatch(addproductActions.addProduct(inputs));
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  let optionList = optionValues.map(function (optionValue, index) {
    return (
      <option
        name={optionValue.name}
        id={optionValue.id}
        value={optionValue.name}
        key={optionValue.id}
      >
        {optionValue.name}
      </option>
    );
  });

  let inputsList = formValues.map(function (formValue, index) {
    return (
      <div className="form-group" key={formValue + 'div'}>
        <label
          htmlFor={
            formValue === 'Category'
              ? 'select' + formValue
              : 'input' + formValue
          }
          className="form-label"
        >
          {formValue}
        </label>

        {formValue === 'Category' ? (
          <select
            id={'select' + formValue}
            name={Object.keys(inputs)[index]}
            // value={Object.values(inputs)[index]}
            defaultValue=""
            key={formValue}
            onChange={onChange}
            className="form-select"
          >
            <option value="" disabled hidden>
              Choose a catagory
            </option>
            {optionList}
          </select>
        ) : (
          <div className="input-group">
            {formValue === 'Price' && (
              <span className="input-group-text">$</span>
            )}
            <input
              type="text"
              id={'input' + formValue}
              name={Object.keys(inputs)[index]}
              value={Object.values(inputs)[index]}
              key={formValue}
              onChange={onChange}
              className={
                'form-control' +
                (submitted && !Object.values(inputs)[index]
                  ? ' is-invalid'
                  : '')
              }
            />
          </div>
        )}

        {submitted && !Object.values(inputs)[index] && (
          <div className="invalid-feedback" key={index}>
            {formValue} is required
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>New Product</h2>
      <form name="form" onSubmit={onSubmit}>
        {inputsList}

        <div className="form-group">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
