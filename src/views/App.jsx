import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx"
//import customcomponent
import Monitor from "../customComponent/monitor/Monitor"
import HeaderLayout from "../layouts/HeaderLayout"
import FooterLayout from "../layouts/FooterLayout"
import { connect } from "react-redux"
import { productsFetch } from "../actions/ProductActions"
import { compose } from "redux"

const styles = them => ({
  ...profilePageStyle,
  paddingAll: {
    padding: "20px"
  }
})
class App extends React.Component {
  componentDidMount() {
    this.props.productsFetch()
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <HeaderLayout />

        <div
          className={classNames(
            classes.main,
            classes.mainRaised,
            classes.paddingAll
          )}
        >
          <div className={classes.container}>
            <Monitor products={this.props.products} />
          </div>
        </div>
        <FooterLayout />
      </div>
    )
  }
}
function mapStateToProps({ products }) {
  return { products }
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { productsFetch }
  )
)(App)
