import React, { Component } from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import logo from "../resources/images/logo/logo.png"
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx"

const styles = them => ({
  ...profilePageStyle,
  imgSize: {
    width: "50px",
    height: "50px"
  },
  textCenter: {
    textAlign: "center"
  },
  mainText: {
    color: "#000000",
    fontSize: "52px",
    margin: "5px"
  }
})

class HeaderLayout extends Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          burger={<img className={classes.imgSize} src={logo} alt="" />}
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "dark"
          }}
          {...rest}
        />

        <Parallax
          small
          filter
          image={require("../resources/images/bg/bg1.jpg")}
        />
      </div>
    )
  }
}
export default withStyles(styles)(HeaderLayout)
