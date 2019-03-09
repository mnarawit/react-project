import React, { Component } from "react"
//import core component
import withStyles from "@material-ui/core/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
// @material-ui/icons
import Check from "@material-ui/icons/Check"
import Warning from "@material-ui/icons/Warning"
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx"
import Clearfix from "components/Clearfix/Clearfix.jsx"
import notificationsStyles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.jsx"

//import customcomponent
import Calculator from "../monitor/Calculator"
import ProductList from "../product/ProductList"
import axios from "axios"
const styles = them => ({
  ...notificationsStyles
})
class Monitor extends Component {
  constructor(props) {
    super(props)
    this.state = { totalPrice: 0, orders: [], confirm: false, msg: "" }
    this.addOrder = this.addOrder.bind(this)
    this.delOrder = this.delOrder.bind(this)
    this.confirmOrder = this.confirmOrder.bind(this)
    this.cancelOrder = this.cancelOrder.bind(this)
  }
  addOrder(product) {
    let findOrder = this.state.orders.find(
      order => order.product.id == product.id
    )
    if (findOrder) {
      findOrder.quantity++
    } else {
      this.state.orders.push({ product: product, quantity: 1 })
    }
    const totalPrice = this.state.totalPrice + parseInt(product.unitPrice)
    this.setState({
      totalPrice: totalPrice,
      orders: this.state.orders,
      confirm: false
    })
  }
  delOrder(product) {
    let findOrder = this.state.orders.find(
      order => order.product.id == product.id
    )
    let resultOrder = this.state.orders.filter(
      order => order.product.id != product.id
    )
    const totalPrice =
      this.state.totalPrice -
      findOrder.quantity * parseInt(findOrder.product.unitPrice)
    this.setState({
      totalPrice: totalPrice,
      orders: resultOrder,
      confirm: false
    })
  }
  confirmOrder() {
    const { totalPrice, orders } = this.state
    if (orders && orders.length > 0) {
      axios
        .post("http://localhost:3001/orders", {
          orderedDate: new Date(),
          totalPrice,
          orders
        })
        .then(res => {
          this.setState({
            totalPrice: 0,
            orders: [],
            confirm: true,
            msg: (
              <SnackbarContent
                message={
                  <span>
                    <b>SUCCESS ALERT: </b> Order has been completed.
                  </span>
                }
                close
                color="success"
                icon={Check}
              />
            )
          })
        })
    } else {
      this.setState({
        totalPrice: 0,
        orders: [],
        confirm: true,
        msg: (
          <SnackbarContent
            message={
              <span>
                <b>WARNING ALERT: </b>Please select your order.
              </span>
            }
            close
            color="warning"
            icon={Warning}
          />
        )
      })
    }
  }
  cancelOrder() {
    this.setState({ totalPrice: 0, orders: [] })
  }
  render() {
    return (
      <div>
        {this.state.confirm && <div>{this.state.msg}</div>}

        <Clearfix />

        <h2>Menu</h2>
        <GridContainer>
          <GridItem md={8}>
            <ProductList
              products={this.props.products}
              onAddOrder={this.addOrder}
            />
          </GridItem>
          <GridItem md={4}>
            <Calculator
              totalPrice={this.state.totalPrice}
              orders={this.state.orders}
              onDelOrder={this.delOrder}
              onConfirmOrder={this.confirmOrder}
              onCancelOrder={this.cancelOrder}
            />
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}
export default withStyles(styles)(Monitor)
