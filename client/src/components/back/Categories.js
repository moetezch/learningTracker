import React, { Component } from 'react'
import Sidenav from './Sidenav'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories()
  }
  renderCategories() {
    console.log(this.props.categories);

    return this.props.categories.reverse().map((category, index) => {

      return <div className="card cyan darken-1" key={category._id}>

        <p>{category.name}</p>
        <button
          onClick={() => {
            if (window.confirm('Are you sure you wish to delete this poll?')) {
               this.props.deleteCategory(category._id) 
               this.props.getCategories()
              }


          }
          }
          title="Delete Category">
          delete</button>
      </div>
    })
  }
  render() {

    return (
      <div className="columns">
        <Sidenav />
        <section className="column">
          Categories
          <div>
            <Link className="button is-right" to="/categories/new">
              <span className="icon is-small"><i className="fas fa-plus "></i></span>New
            </Link>
          </div>
          {this.renderCategories()}
        </section>
      </div>
    )
  }
}
function mapStateToProps({ categories }) {
  return { categories }
}

export default connect(mapStateToProps, actions)(Categories)
