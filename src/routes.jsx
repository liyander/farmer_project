import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Payments from './pages/Payments'
import Schemes from './pages/Schemes'
import Support from './pages/Support'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/payments" component={Payments} />
        <Route path="/schemes" component={Schemes} />
        <Route path="/support" component={Support} />
      </Switch>
    </Router>
  )
}

export default Routes