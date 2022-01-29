import React from 'react';
import './Product.css';
import { StarRate } from '@material-ui/icons';

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarRate className="product__ratingIcon" />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="Lean Startup" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
