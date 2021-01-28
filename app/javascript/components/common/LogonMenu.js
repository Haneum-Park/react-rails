import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Button, Menu, MenuItem, ListItemText } from '@material-ui/core'

import { AuthConsumer } from '../../utils/Auth'

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'unset'
  }
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const LogonMenu = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AuthConsumer>
      { ({ isAuth, logout }) => (
        <div style={{ marginLeft: 'auto' }}>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.root}
          >
            {props.email}
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemText primary="로그아웃" onClick={logout} />
            </StyledMenuItem>
          </StyledMenu>
        </div>
      )}
    </AuthConsumer>
  )
}

export default LogonMenu