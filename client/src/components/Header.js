import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from '../actions'
import { Link, NavLink } from "react-router-dom"
import { Navbar } from 'react-bulma-components'
import image from "../images/White_pencil.png"

class Header extends Component {

  renderNavbarItems() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <Navbar.Container position="end" >
            <NavLink className="navbar-item " to="/features" >Features</NavLink>
            <NavLink className="navbar-item" to="/pricing" >Pricing</NavLink>
            <NavLink className="navbar-item" to="/testimonials" >Testimonials</NavLink>
            <NavLink className="navbar-item" to="/faq" >FAQ</NavLink>
            <NavLink className="navbar-item" to="/login" ><button className="button is-primary">Sign Up</button> </NavLink>
          </Navbar.Container>
        )
      default:
        return (
          <Navbar.Container position="end" >
            <Navbar.Item dropdown hoverable>
              <Navbar.Link>
                <figure className="image is-32x32" style={{ "marginRight": ".5em" }}>
                  <img src={this.props.auth.profileImage} style={{ "borderRadius": "50%", "maxHeight": "2em " }} />
                </figure>
                <span style={{"color":"white"}}>{this.props.auth.name}</span>
              </Navbar.Link>
              <Navbar.Dropdown boxed>
                <Navbar.Item href="/api/logout">
                  <span className="icon is-small">
                    <i className="fa fa-power-off" style={{ marginRight: '1em' }}></i>
                  </span>
                  Logout
        </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
        )
    }
  }
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand >
            <Link to={this.props.auth ? "/dashboard" : "/"} className="navbar-item">
            Learning Tracker
            </Link>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            {this.renderNavbarItems()}
          </Navbar.Menu>
        </Navbar>
      
      </div>
    )
  }
}


function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Header)