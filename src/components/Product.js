import React from 'react';
import './Product.css';
import { StarRate } from '@material-ui/icons';
import { useStateValue } from '../StateProvider';
import notificationSvc from '../services/notificationService';

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    notificationSvc.success(`${title} Added successfully to Cart`);
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
