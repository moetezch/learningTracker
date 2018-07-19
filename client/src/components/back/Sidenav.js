import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from '../../actions'
import { Link, NavLink } from "react-router-dom"


class Sidenav extends Component {
  renderSidenav() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return
      default:
        return (
 
                <nav className="menu">
                  <p className="menu-label">General</p>
                  <ul className="menu-list">
                    <li><Link to="/dashboard"><span className="icon is-small"><i className="fa fa-tachometer-alt"></i></span> Dashboard</Link></li>
                  </ul>
                  <p className="menu-label">Learning</p>
                  <ul className="menu-list">
                    <li><Link to="/sessions/live"><span className="icon is-small"><i className="fa fa-pen-square "></i></span> Live Session</Link></li>
                    <li><Link to="/sessions"><span className="icon is-small"><i className="fa fa-desktop"></i></span> All Sessions</Link></li>
                    <li><Link to="/projects"><span className="icon is-small"><i className="fa fa-project-diagram"></i></span> Projects</Link></li>
                    <li><Link to="/categories"><span className="icon is-small"><i className="fa fa-tags"></i></span> Categories</Link></li>
                    <li><Link to="/goals"><span className="icon is-small"><i className="fa fa-flag"></i></span> Goals</Link></li>
                  </ul>
                </nav>
        )
    }
  }
  render() {
    return (
      <aside className="column is-2 aside">
        {this.renderSidenav()}
        </aside>
    )
  }
}



function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Sidenav)