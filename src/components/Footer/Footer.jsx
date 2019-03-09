/*eslint-disable*/
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
import { withStyles } from "@material-ui/core"

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite"
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx"

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx"
const styles = them => ({
  ...profilePageStyle,
  ...footerStyle
})
function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by Narawit
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
}

export default withStyles(styles)(Footer)
