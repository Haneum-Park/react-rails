import React, { useState } from "react"

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core"

import { AuthConsumer } from '../../utils/Auth'

const Regist = (props) => {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const [open, setOpen] = useState(false);

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button color="inherit" type="button" onClick={handleClickOpen}>회원가입</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">회원가입</DialogTitle>
        <DialogContent>
          <AuthConsumer>
            { ({ isAuth, regist }) => (
              <form onSubmit={regist.bind(this, user, props)}>
                <TextField autoFocus margin="dense" id="name" label="name" type="text" name="name" fullWidth onChange={handleChange} value={user.name} />
                <TextField autoFocus margin="dense" id="email" label="email" type="text" name="email" fullWidth onChange={handleChange} value={user.email} />
                <TextField autoFocus margin="dense" id="password" label="password" type="password" name="password" fullWidth onChange={handleChange} value={user.password} />
                <DialogActions>
                  <Button type="submit">Regist</Button>
                  <Button type="button" onClick={handleClose}>close</Button>
                </DialogActions>
              </form>
            )}
          </AuthConsumer>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Regist