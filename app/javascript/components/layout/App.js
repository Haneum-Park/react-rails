import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../common/Header'
import { AuthProvider } from '../utils/Auth'
import Index from '../index'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AuthProvider>
        <Header history={this.props.history} />
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </AuthProvider>
    )
  }
}

export default App