import React from 'react';
import './Main.scss';
import Products from '../../pages/Products';
import ShoppingCart from '../../pages/ShoppingCart';
import CheckOut from '../../pages/CheckOut';
import Orders from '../../pages/Orders';
import AdminProducts from '../../pages/AdminProducts';
import NewProduct from '../../pages/NewProduct';
import AdminOrders from '../../pages/AdminOrders';
import { Route, Switch } from 'react-router';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/shoppingcart" component={ShoppingCart}></Route>
        <Route exact path="/checkout" component={CheckOut}></Route>
        <Route exact path="/orders" component={Orders}></Route>
        <Route exact path="/admin-products" component={AdminProducts}></Route>
        <Route exact path="/admin-products/new" component={NewProduct}></Route>
        <Route exact path="/admin-orders" component={AdminOrders}></Route>
      </Switch>
    </div>
  );
}

export default Main;
