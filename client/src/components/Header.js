import React, { Component } from "react"
import { Link,NavLink } from "react-router-dom"
import { Navbar } from 'react-bulma-components'
import image from "../images/icon-web_dev.png"

class Header extends Component {

  renderContent() {
console.log(this.props.auth);

    switch (this.props.auth) {
      case null:
        return
      case undefined:
        return <Navbar.Item href="#">Login</Navbar.Item>  
      default:
        return <Navbar.Item href="#" key="1">Logged IN</Navbar.Item>
    }
  }
  render() {
    return (

        <Navbar color="light">
        <Navbar.Brand >
          <Link to={this.props.auth ? "/dashboard" : "/"} className="navbar-item">
            <img
              src={image}
              alt=""
              width="150"
              height="64"
            />
          </Link>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
        <Navbar.Container position="end" >
        {this.renderContent()}
        </Navbar.Container>
        </Navbar.Menu>
        </Navbar>

    )
  }
}



export default Header

