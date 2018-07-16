import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom'


import Header from './Header'



class App extends Component {
  
  componentDidMount() {
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



export default App
