import React from 'react';

function ProductCard(props) {
  return (
    <div className={props.className} id="productcard">
      <img src={props.inputs.imageURL} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.inputs.title}</h5>
        <p className="card-text">${props.inputs.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
