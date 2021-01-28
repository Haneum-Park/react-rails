'use strict'

import React from "react"

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from "@material-ui/core"

import Login from './Login'
import Regist from './Regist'
import NavBarMenu from './NavBarMenu'
import LeftSideMenu from './LeftSideMenu'
import LogonMenu from './LogonMenu'
import { AuthConsumer } from '../../utils/Auth'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'unset',
    borderBottom: '1px solid #e6e6e6'
  },
  margin: {
    marginRight: '10px'
  },
  displaynone: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root} color="transparent">
      <Toolbar>
        <LeftSideMenu />
        <Typography variant="h6" className={classes.margin}>로고자리</Typography>
        <div className={classes.displaynone}>
          <NavBarMenu />
          <NavBarMenu />
          <NavBarMenu />
          <NavBarMenu />
        </div>
        <AuthConsumer>
          { ({ isAuth, email }) => (
            <>
              {
                isAuth ?
                <><LogonMenu email={email} props={props} /></> :
                <>
                  <Login props={props} />
                  <Regist props={props} />
                </>
              }
            </>
          )}
        </AuthConsumer>
      </Toolbar>
    </AppBar>
  )
}

export default Header
