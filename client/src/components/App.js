import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Footer from './Footer'
// front
import Landing from './front/Landing'
import Login from './front/Login'
import Testimonials from './front/Testimonials'
import Features from './front/Features'
import Pricing from './front/Pricing'
// Back
import Dashboard from './back/Dashboard'
import LiveSession from './back/LiveSession'
import Projects from './back/Projects'
import Goals from './back/Goals'
import AllSessions from './back/AllSessions'
import Categories from './back/Categories'
import AddSession from './back/add/AddSession'
import AddProject from './back/add/AddProject'
import AddCategory from './back/add/AddCategory'
import AddGoal from './back/add/AddGoal'
import Faq from './front/Faq.js'

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
        <Header/>
        <Route exact path="/" component={Landing}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route path="/testimonials" component={Testimonials}/>
        <Route path="/features" component={Features}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/faq" component={Faq}/>
        <Route exact path="/sessions" component={AllSessions}/>
        <Route path="/sessions/live" component={LiveSession}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/goals" component={Goals}/>
        <Route path="/sessions/new" component={AddSession}/>
        <Route path="/goals/new" component={AddGoal}/>
        <Route path="/categories/new" component={AddCategory}/>
        <Route path="/projects/new" component={AddProject}/>
        <Footer/>
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