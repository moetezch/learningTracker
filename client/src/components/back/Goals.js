import React from 'react'
import Sidenav from './Sidenav'
import {Link} from "react-router-dom"

const Goals = () => {
  return (
    <div className="columns">
    <Sidenav/>
    <section className="column">
    Goals

    <div>
<Link className="button is-right" to="/goals/new">
<span className="icon is-small"><i className="fas fa-plus "></i></span>New
</Link>
</div>
    </section>
    </div>
  )
}

export default Goals