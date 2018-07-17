import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from '../actions'
import { Link, NavLink } from "react-router-dom"
import { Navbar} from 'react-bulma-components'
import image from "../images/icon-web_dev.png"

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <Navbar.Container position="end" >
          <NavLink className="navbar-item " to="/features" >Features</NavLink>
          <NavLink className="navbar-item" to="/pricing" >Pricing</NavLink>
          <NavLink className="navbar-item" to="/about" >About</NavLink>
          <NavLink className="navbar-item" to="/login" ><button className="button is-primary">Sign Up</button> </NavLink>
          </Navbar.Container>
        )
      default:
        return (
          <Navbar.Container position="end" >
          <Navbar.Item dropdown hoverable>
            <Navbar.Link>
              <figure className="image is-32x32" style={{ "marginRight": ".5em"}}>
                <img src={this.props.auth.profileImage}  style={{"borderRadius":"50%","maxHeight":"2em "}}/>
              </figure>
              {this.props.auth.name}
            </Navbar.Link>
            <Navbar.Dropdown boxed>
              <Navbar.Item href="/api/logout">
                <span className="icon is-small">
                  <i className="fa fa-power-off" style={{ marginRight: '1em'}}></i>
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

      <Navbar color="info">
        <Navbar.Brand >
          <Link to={this.props.auth ? "/dashboard" : "/"} className="navbar-item">
            <img
              src={image}
              alt=""
              width="100"
              height="64"
            />
          </Link>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>

            {this.renderContent()}

        </Navbar.Menu>
      </Navbar>

    )
  }
}



function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Header)