import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './front/Landing'
import Dashboard from './back/Dashboard'
import Login from './front/Login'
import About from './front/About'
import Features from './front/Features'
import Pricing from './front/Pricing'

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser()
  }
  renderContent() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
    return(
    
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/features" component={Features} />
        <Route path="/pricing" component={Pricing} />
      </div>
    </BrowserRouter>
 

    )
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}



function mapStateToProps({ auth }) {
  return { auth }
}


export default connect(mapStateToProps, actions)(App)