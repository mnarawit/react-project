import React, { Component } from "react"
import Header from "../layouts/HeaderLayout"
import Footer from "../layouts/FooterLayout"

import classNames from "classnames"
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx"
import withStyles from "@material-ui/core/styles/withStyles"

const styles = them => ({
  ...profilePageStyle,
  textCenter: {
    textAlign: "center"
  },
  text1: {
    color: "#000000",
    fontSize: "150px",
    fontWeight: 800
  },

  text3: {
    color: "#000000",
    fontSize: "32px",
    fontWeight: 200
  },
  paddingAll: {
    padding: "20px"
  }
})
class NotFound extends Component {
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
            <div className={classes.textCenter}>
              {" "}
              <div className={classes.text1}>404</div>
              <div className={classes.text3}>
                The requested URL was not found.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default withStyles(styles)(NotFound)
