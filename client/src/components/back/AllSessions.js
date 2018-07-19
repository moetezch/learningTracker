import React from 'react'
import Sidenav from './Sidenav'
import { Link} from "react-router-dom"

const AllSessions = () => {
  return (
    <div className="columns">
      <Sidenav />
      <section className="column">
        AllSessions
<div>
<Link className="button is-right" to="/sessions/new">
<span className="icon is-small"><i className="fas fa-plus "></i></span>New
</Link>
</div>
      </section>
    </div>
  )
}

export default AllSessions