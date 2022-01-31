import { StarRate } from '@material-ui/icons';
import React from 'react';
import notificationSvc from '../services/notificationService';
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
    notificationSvc.toast(`${title} Removed Successfully from basket`);
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="Checkout Product" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <StarRate className="product__ratingIcon" />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
