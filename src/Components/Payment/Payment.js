import React from "react";
import CheckoutProdcut from "../CheckoutProduct/CheckoutProdcut";
import { useStateValue } from "../StateProvider";
import "./Payment.css";
import { Link } from "react-router-dom";
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <h1>Checkout {<Link to="checkout">({basket?.length}) items</Link>}</h1>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment address</h3>
          </div>
          <div className="payment__address">
            <h3>{user.email}</h3>
            <h3>Kebele 18, Gondar</h3>
            <h3>Gondar, Ethiopia</h3>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((items) => (
              <CheckoutProdcut
                id={items.id}
                title={items.title}
                image={items.image}
                price={items.price}
                rating={items.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Stripe will go here */}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
