import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cart from "./containers/Cart";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={ProductListing}></Route>
          <Route path="/product/:productId" exact component={ProductDetail}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
