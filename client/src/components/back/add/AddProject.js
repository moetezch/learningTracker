import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Sidenav from '../Sidenav'
import { addProject } from '../../../actions/index'
import validate from '../../../utils/validateName'
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


class AddProject extends Component {
  onSubmit = (project) => {
    this.props.addProject(project)
  }


  render() {
    const { handleSubmit } = this.props

    return (
      <div className="columns">
        <Sidenav />
        <section className="column">
          <h2 className="is-size-2">Add Project</h2>
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
  addProject: (project) => dispatch(addProject(project))
});
AddProject = connect(mapStateToProps, mapDispatchToProps)(AddProject)

export default reduxForm({
  form: 'projectForm',
  validate
})(AddProject)