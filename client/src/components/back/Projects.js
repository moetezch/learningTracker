import React from 'react'
import Sidenav from './Sidenav'
import {Link} from "react-router-dom"

const Projects = () => {
  return (
    <div className="columns">
    <Sidenav/>
    <section className="column">
    Projects

    <div>
<Link className="button is-right" to="/projects/new">
<span className="icon is-small"><i className="fas fa-plus "></i></span>New
</Link>
</div>
    </section>
    </div>
  )
}

export default Projects