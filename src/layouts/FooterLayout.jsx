import React, { Component } from "react"

import withStyles from "@material-ui/core/styles/withStyles"

import Favorite from "@material-ui/icons/Favorite"

import Footer from "components/Footer/Footer.jsx"

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx"

const styles = them => ({
  ...loginPageStyle
})
class FooterLayout extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Footer
          content={
            <div>
              <div className={classes.center}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by Narawit
              </div>
            </div>
          }
        />
      </div>
    )
  }
}
export default withStyles(styles)(FooterLayout)
