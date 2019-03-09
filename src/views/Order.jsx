import React, { Component } from "react"
import Header from "../layouts/HeaderLayout"
import Footer from "../layouts/FooterLayout"
import Button from "components/CustomButtons/Button.jsx"
import withStyles from "@material-ui/core/styles/withStyles"
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx"

import classNames from "classnames"
import { compose } from "redux"
import { connect } from "react-redux"
import { ordersFetch, orderDelete } from "../actions/OrderActions"
const styles = them => ({
  ...profilePageStyle,
  buttonMargin3: {
    margin: "10px"
  },
  mainText: {
    color: "#000000",
    fontSize: "16px"
  },
  paddingAll: {
    padding: "20px"
  }
})
class Order extends Component {
  componentDidMount() {
    this.props.ordersFetch()
  }
  delOrder(order) {
    this.props.orderDelete(order.id)
  }

  showOrders() {
    const { classes } = this.props
    return (
      this.props.orders &&
      this.props.orders.map(order => {
        const date = new Date(order.orderedDate)
        return (
          <div key={order.id} className="col-md-3">
            <hr />
            <p className="text-right" />
            <Button
              className={classes.buttonMargin3}
              size="sm"
              color="danger"
              onClick={() => this.delOrder(order)}
            >
              X
            </Button>
            <h5>
              DATE. {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </h5>
            <ul>
              {order.orders &&
                order.orders.map(record => {
                  return (
                    <li key={record.product.id}>
                      <div className={classes.mainText}>
                        {" "}
                        {record.product.productName} x {record.quantity} ={" "}
                        {record.product.unitPrice * record.quantity}
                      </div>
                    </li>
                  )
                })}
            </ul>
            <h6>Total: {order.totalPrice} THB</h6>
          </div>
        )
      })
    )
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <Header />

        <div
          className={classNames(
            classes.main,
            classes.mainRaised,
            classes.paddingAll
          )}
        >
          <div className={classes.container}>
            <h1>Orders List</h1>
            <div className="row">{this.showOrders()}</div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
function mapStateToProps({ orders }) {
  return { orders }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { ordersFetch, orderDelete }
  )
)(Order)
