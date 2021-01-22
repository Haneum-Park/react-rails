'use strict'

import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>로고자리</Typography>
          <Button color="inherit">로그인</Button>
          <Button color="inherit">회원가입</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header