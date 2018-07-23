import React, { Component } from 'react'
import Sidenav from './Sidenav'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Projects extends Component {
  componentDidMount() {
    this.props.getProjects()
  }
  renderprojects() {
    console.log(this.props.Projects);

    return this.props.projects.reverse().map((project, index) => {

      return <div className="card cyan darken-1" key={project._id}>

        <p>{project.name}</p>
        <button
          onClick={() => {
            if (window.confirm('Are you sure you wish to delete this poll?')) {
               this.props.deleteProject(project._id) 
               this.props.getProjects()
              }


          }
          }
          title="Delete Project">
          delete</button>
      </div>
    })
  }
  render() {

    return (
      <div className="columns">
        <Sidenav />
        <section className="column">
          Projects
          <div>
            <Link className="button is-right" to="/projects/new">
              <span className="icon is-small"><i className="fas fa-plus "></i></span>New
            </Link>
          </div>
          {this.renderprojects()}
        </section>
      </div>
    )
  }
}
function mapStateToProps({ projects }) {
  return { projects }
}

export default connect(mapStateToProps, actions)(Projects)
