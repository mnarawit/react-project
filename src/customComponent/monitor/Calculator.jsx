import React, { Component } from "react"
import Button from "components/CustomButtons/Button.jsx"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = them => ({
  buttonMargin3: {
    margin: "10px"
  },
  mainText: {
    color: "#000000",
    fontSize: "16px",
    margin: "5px"
  }
})
class Calculator extends Component {
  showOrders(orders) {
    if (!orders || orders.length === 0) {
      return <div />
    } else {
      return orders.map(order => {
        const { classes } = this.props
        return (
          <div key={order.product.id}>
            {order.product.productName} x {order.quantity} ={" "}
            {order.product.unitPrice * order.quantity}
            <Button
              className={classes.buttonMargin3}
              size="sm"
              onClick={() => this.props.onDelOrder(order.product)}
            >
              X
            </Button>
          </div>
        )
      })
    }
  }

  render() {
    const { totalPrice, orders } = this.props
    return (
      <div>
        <h1 className="text-right">{totalPrice} THB</h1>
        {this.showOrders(orders)}
        <Button color="success" onClick={() => this.props.onConfirmOrder()}>
          Confirm
        </Button>
        <Button color="danger" onClick={() => this.props.onCancelOrder()}>
          Cancel
        </Button>
      </div>
    )
  }
}
export default withStyles(styles)(Calculator)
