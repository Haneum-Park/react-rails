import React, { useState } from 'react'

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'

import { AuthConsumer } from '../../utils/Auth'

const Login = (props) => {
  const [user, setUser] = useState({ email: '', password: '', auth: false })
  const [open, setOpen] = useState(false)

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div style={{ marginLeft: 'auto' }}>
      <Button color="inherit" type="button" onClick={handleOpen}>로그인</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">로그인</DialogTitle>
        <DialogContent>
          <AuthConsumer>
            { ({ isAuth, login }) => (
              <form onSubmit={login.bind(this, user, props)} method="POST">
                <TextField autoFocus margin="dense" id="email" label="email" type="text" name="email" fullWidth onChange={handleChange} value={user.email} />
                <TextField margin="dense" id="password" label="password" type="password" name="password" fullWidth onChange={handleChange} value={user.password} />
                <DialogActions>
                  <Button type="submit" onClick={handleClose}>로그인</Button>
                  <Button type="button" onClick={handleClose}>취소</Button>
                </DialogActions>
              </form>
            )}
          </AuthConsumer>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Login