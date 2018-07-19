import React from 'react'
import Sidenav from './Sidenav'


const Dashboard = () => {
  return (

<div className="columns">
    <Sidenav/>

    <section className="column">
    <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
            <div className="tile">
                <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                        <p className="title">Vertical...</p>
                        <p className="subtitle">Top tile</p>
                    </article>
                    <article className="tile is-child notification is-warning">
                        <p className="title">...tiles</p>
                        <p className="subtitle">Bottom tile</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                        <p className="title">Middle tile</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png"/>
                        </figure>
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                    <p className="title">Wide tile</p>
                    <p className="subtitle">Aligned with the right tile</p>
                    <div className="content">
                       gggggggggggggggggggggggggggggg
                    </div>
                </article>
            </div>
        </div>
        <div className="tile is-parent">
            <article className="tile is-child notification is-success">
                <div className="content">
                    <p className="title">Tall tile</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content">
                       ggggggggggggggggggggggggg
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>

</div>
  )
}

export default Dashboard

/*


    <aside className="column is-3 is-hidden-mobile">
        <div className="panel">
            <p className="panel-heading has-text-centered">Main Heading Goes Here</p>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fa fa-home"></i>
                </span>
                <span className="name">Dashboard</span>
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fa fa-map-marker"></i>
                </span>
                <span className="name">Activity</span>
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fa fa-th-list"></i>
                </span>
                <span className="name">Timeline</span>
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fa fa-folder-o"></i>
                </span>
                <span className="name">Folders</span>
            </a>
            <hr/>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fa fa-comment-o"></i>
                </span>
                <span className="name">Comments</span>
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fa fa-envelope-o"></i>
                </span>
                <span className="name">Mail</span>
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fa fa-rss"></i>
                </span>
                <span className="name">RSS Feed</span>
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fa fa-database"></i>
                </span>
                <span className="name">Data</span>
            </a>
        </div>
    </aside>
    <section className="column">
    <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
            <div className="tile">
                <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                        <p className="title">Vertical...</p>
                        <p className="subtitle">Top tile</p>
                    </article>
                    <article className="tile is-child notification is-warning">
                        <p className="title">...tiles</p>
                        <p className="subtitle">Bottom tile</p>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                        <p className="title">Middle tile</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png"/>
                        </figure>
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                    <p className="title">Wide tile</p>
                    <p className="subtitle">Aligned with the right tile</p>
                    <div className="content">
                       
                    </div>
                </article>
            </div>
        </div>
        <div className="tile is-parent">
            <article className="tile is-child notification is-success">
                <div className="content">
                    <p className="title">Tall tile</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content">
                    
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>
*/