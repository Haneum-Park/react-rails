'use strict'

import React, { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'

import Login from './Login'
import Regist from './Regist'
import RightSideMenu from './RightSideMenu'
import { AuthConsumer } from '../utils/Auth'

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

const Header = (props) => {
  const classes = useStyles();
  return (
    <AuthConsumer className={classes.root}>
      { ({ isAuth, email }) => (
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>로고자리</Typography>
            {/* 로그인, 회원가입 */}
            {
              isAuth ?
              <><RightSideMenu email={email.toLowerCase()} color="inherit" /></> :
              <>
                <Login />
                <Regist />
              </>
            }
          </Toolbar>
        </AppBar>
      )}
    </AuthConsumer>
  )
}

export default Header
