import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Sidenav from '../Sidenav'
import { addCategory } from '../../../actions/index'
import validate from '../../../utils/validateCategory'
const renderField = ({ input, label, type, meta: { touched, error }, ...custom }) => (

  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input {...input} type={type} style={{ marginBottom: "5px" }} className="input"/>
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
)


class AddCategory extends Component {
  onSubmit = (category) => {
    this.props.addCategory(category)
  }


  render() {
    const { handleSubmit } = this.props

    return (
      <div className="columns">
        <Sidenav />
        <section className="column">
          <h2 className="is-size-2">Add Category</h2>
          <form onSubmit={handleSubmit(this.onSubmit)}>

            <Field
              name="name"
              type="text"
              component={renderField}
              label="Name"
              s={12}

            >
            </Field>

            <div>
              <button className="button" type="submit" >Save</button>

            </div>
          </form>
        </section>
      </div>
    )
  }
}
const mapStateToProps = ({ auth }) => ({
  auth
})
const mapDispatchToProps = (dispatch) => ({
  addCategory: (category) => dispatch(addCategory(category))
});
AddCategory = connect(mapStateToProps, mapDispatchToProps)(AddCategory)

export default reduxForm({
  form: 'categoryForm',
  validate
})(AddCategory)