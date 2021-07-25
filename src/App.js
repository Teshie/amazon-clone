import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./Components/Firebase/Firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment/Payment";
function App() {
  // const
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        //if the user is signed in aleraedy
        //dispatch the user data to the data layer
        dispatch({
          //the user is just logged in / the user was logged in
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
