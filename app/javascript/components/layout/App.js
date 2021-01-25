import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../common/Header'
import Index from '../index'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </div>
    )
  }
}

export default App