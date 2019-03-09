import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "../views/App"
import Order from "../views/Order"
import Product from "../views/Product"
import NotFound from "../views/NotFound"

export default class Routes extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/products" component={Product} />
        <Route component={NotFound} />
      </Switch>
    )
  }
  render() {
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    )
  }
}
