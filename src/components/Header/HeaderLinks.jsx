/*eslint-disable*/
import React from "react"

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import List from "@material-ui/core/List"

import Button from "components/CustomButtons/Button.jsx"

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <Button
        href="http://localhost:3000/orders"
        color="transparent"
        target="_blank"
        className={classes.navLink}
      >
        <h6>ORDERS</h6>
      </Button>
      <Button
        href="http://localhost:3000/products"
        color="transparent"
        target="_blank"
        className={classes.navLink}
      >
        <h6>PRODUCTS</h6>
      </Button>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
