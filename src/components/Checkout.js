import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Ad"
          className="checkout__ad"
        />
        <div className="">
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
