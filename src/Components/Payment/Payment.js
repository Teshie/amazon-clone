import React, { useState } from "react";
import CheckoutProdcut from "../CheckoutProduct/CheckoutProdcut";
import { useStateValue } from "../StateProvider";
import "./Payment.css";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer/Reducer";
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState();
  const [disable, setDisable] = useState();

  const handleSubmit = (e) => {
    //do all the fancy stripe stuff...
  };
  const handleChange = (event) => {
    //Listen for changes in the card element
    //and display any errors at the customer types their card details
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
          <div className="payment__details">
            {/* Stripe will go here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
