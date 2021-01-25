import axios from 'axios'

const Authenticate = async () => {
  let auth = { isAuth: false, email: '' }
  await axios
    .get('/api/v1/users/auth/signedin', { withCredentials: true })
    .then((res) => {
      auth = { isAuth: res.data.logged_in, email: res.data.email }
      return auth
    })
    .catch((err) => console.log(err))

    return auth
}

export default Authenticate