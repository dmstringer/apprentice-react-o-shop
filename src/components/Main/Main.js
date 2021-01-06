import React from 'react';
import './Main.scss';
import Products from '../../pages/Products';
import Home from '../../pages/Home';
import ShoppingCart from '../../pages/ShoppingCart';
import CheckOut from '../../pages/CheckOut';
import OrderSuccess from '../../pages/OrderSuccess';
import Orders from '../../pages/Orders';
import AdminProducts from '../../pages/AdminProducts';
import AdminOrders from '../../pages/AdminOrders';

import { Route, Switch } from 'react-router';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/shoppingcart" component={ShoppingCart}></Route>
        <Route exact path="/checkout" component={CheckOut}></Route>
        <Route exact path="/ordersuccess" component={OrderSuccess}></Route>
        <Route exact path="/orders" component={Orders}></Route>
        <Route exact path="/adminproducts" component={AdminProducts}></Route>
        <Route exact path="/adminorders" component={AdminOrders}></Route>
      </Switch>
    </div>
  );
}

export default Main;
