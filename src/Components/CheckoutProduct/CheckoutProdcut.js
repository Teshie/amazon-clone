import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";
import FlipMove from "react-flip-move";
const CheckoutProdcut = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <FlipMove>
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          {/* <p>{rating}</p> */}
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    </FlipMove>
  );
};

export default CheckoutProdcut;
