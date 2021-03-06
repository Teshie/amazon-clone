import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer/Reducer";
import { useStateValue } from "../StateProvider";
import "./SubTotal.css";
import { useHistory } from "react-router";
const SubTotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}) items: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => history.push("/payment")}
        className="checkout__button"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default SubTotal;
