import React, { Component } from "react"
import Header from "../layouts/HeaderLayout"
import Footer from "../layouts/FooterLayout"

import classNames from "classnames"
import ProductList from "../customComponent/product/ProductList"
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx"
import withStyles from "@material-ui/core/styles/withStyles"
import Button from "components/CustomButtons/Button.jsx"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { connect } from "react-redux"
import { productsFetch, productDelete } from "../actions/ProductActions"
const styles = them => ({
  ...profilePageStyle,
  buttonMargin3: {
    margin: "10px"
  },
  paddingAll: {
    padding: "20px"
  }
})
class Product extends Component {
  constructor(props) {
    super(props)
    this.delProduct = this.delProduct.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }
  componentDidMount() {
    this.props.productsFetch()
  }

  editProduct(product) {
    this.props.history.push("products/edit/" + product.id)
  }

  delProduct(product) {
    this.props.productDelete(product.id)
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
            <div className="row">
              <div className="col-11">
                <h2>Products</h2>

                <ProductList
                  products={this.props.products}
                  onDelProduct={this.delProduct}
                  onEditProduct={this.editProduct}
                />
              </div>
              <div className="col-1">
                <Button
                  color="success"
                  onClick={() => this.props.history.push("products/add")}
                >
                  ADD
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
function mapStateToProps({ products }) {
  return { products }
}
export default compose(
  withStyles(styles),
  withRouter,
  connect(
    mapStateToProps,
    { productsFetch, productDelete }
  )
)(Product)
