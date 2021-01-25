import React, { Component, createContext } from 'react'

import axios from 'axios'

import Axios from './Axios'

import Authenticate from './Authenticate'

const AuthContext = createContext()

class AuthProvider extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: {
        isAuth: false,
        email: '',
      },
    }
  }

  componentDidMount() {
    console.log('auth mounted')
    Authenticate()
      .then((res) => {
        this.setState(prevState => ({
          loggedIn: {
            ...prevState.loggedIn,
            isAuth: res.isAuth,
            email: res.email
          }
        }))
      })
      .catch((err) => console.log(err))
  }

  // 로그인
  login = (user, props, e) => {
    e.preventDefault();
    
    Axios()
    axios
      .post('/api/v1/users/auth', { user: { ...user } }, { withCredentials: true })
      .then((res) => {
        this.setState({ isAuth: true, email: res.data.email })
        this.props.history.push('/')
      })
      .catch((err) => console.log(err))
  }

  // 회원가입
  regist = (user, props, e) => {
    e.preventDefault();
    
    Axios()
    axios
      .post('/api/v1/users/regist', { user: { ...user } }, { withCredentials: true })
      .then((res) => {
        this.setState({ isAuth: true })
        this.props.history.push('/')
      })
      .catch((err) => console.log(err))
  }

  // 로그아웃
  logout = (user, token, e) => {
    e.preventDefault();
    
    Axios()
    axios
      .post('/api/v1/users/auth/logout')
      .then((res) => {
        this.setState(prevState => ({
          loggedIn: {
            ...prevState.loggedIn,
            isAuth: false,
            email: ''
          }
        }))
      })
      .catch((err) => console.log(err))
  }

  render() {
    console.log(this.state.loggedIn)
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.loggedIn.isAuth,
          email: this.state.loggedIn.email,
          login: this.login,
          regist: this.regist
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }