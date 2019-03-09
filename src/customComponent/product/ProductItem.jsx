import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"

import classNames from "classnames"
import Button from "components/CustomButtons/Button.jsx"
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx"

const styles = them => ({
  ...profilePageStyle,
  mainText: {
    color: "#000000",
    fontSize: "16px",
    fontWeight: 600,
    margin: "5px"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 500,
    margin: "0"
  },
  marginButton: {
    "@media (min-width: 573px)": {
      marginLeft: "30%"
    },
    "@media (max-width: 573px)": {
      marginLeft: "36%"
    }
  },
  marginButton2: { marginLeft: "10%" }
})
class ProductItem extends Component {
  render() {
    const { classes } = this.props

    const { productName, unitPrice, pics } = this.props.product
    return (
      <div className="col-md-4 col-sm-6">
        <img
          className={classNames(
            classes.imgRaised,
            classes.imgFluid,
            classes.rounded
          )}
          src={pics}
          alt=""
        />
        <div className={classes.mainText}>{productName}</div>
        <h6 className=" text-right">{unitPrice} THB</h6>
        {this.props.onAddOrder && (
          <Button
            className={classes.marginButton}
            color="info"
            onClick={() => this.props.onAddOrder(this.props.product)}
          >
            <span className={classes.buttonText}>Buy</span>
          </Button>
        )}
        {(this.props.onDelProduct || this.props.onEditProduct) && (
          <Button
            className={classes.marginButton2}
            onClick={() => this.props.onEditProduct(this.props.product)}
          >
            <span className={classes.buttonText}>Edit</span>
          </Button>
        )}
        {this.props.onDelProduct && (
          <Button
            className={classes.marginButton2}
            color="danger"
            onClick={() => this.props.onDelProduct(this.props.product)}
          >
            <span className={classes.buttonText}>Delete</span>
          </Button>
        )}
      </div>
    )
  }
}
export default withStyles(styles)(ProductItem)
