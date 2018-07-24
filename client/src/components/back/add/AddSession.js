import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Sidenav from '../Sidenav'
import { addSession } from '../../../actions/index'
import validate from '../../../utils/validateSession'
import { Select, Control, Label, Input, Textarea } from 'react-bulma-components'
import CheckboxGroup from './form/CheckboxGroup'

const greaterThan = otherField => (value, previousValue, allValues) =>
  parseFloat(value) > parseFloat(allValues[otherField]) ? value : previousValue

const MnSecNormalizer = (otherField, otherField2) => (value, previousValue, allValues) => {
  return parseFloat(value) > parseFloat(allValues[otherField])
    && parseFloat(value) < parseFloat(allValues[otherField2]) ? value : previousValue
}



const renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => (

  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input {...input} type={type} style={{ marginBottom: "5px" }} className="input" {...custom} />
      <div className="has-text-danger" style={{ marginBottom: "20px" }}>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
)

const renderTextarea = ({ input, label, type, meta: { touched, error }, ...custom }) => (


  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <textarea {...input} type={type} className="textarea" />
      <div className="has-text-danger" style={{ marginBottom: "20px" }}>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
)

const renderProject = ({ input, type, label, meta: { touched, error }, ...custom }) => (

  <div className="field">
    <label className="label">{label}</label>
    <div className="select">
      <select  {...input} {...custom} />
      <div className="has-text-danger" style={{ marginBottom: "20px" }}>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
)


class AddSession extends Component {
  componentDidMount() {
    console.log(this.props);

  }
  renderCategories() {
    return this.props.categories.map((category) => {
      return ({ value: category._id, label: category.name })
    })
  }
  renderProjects() {
    return this.props.projects.map((project) => {
      return (<option value={project._id}>{project.name}</option>)
    })
  }

  onSubmit = (session) => {
    console.log(session);

    // this.props.addSession(session)
  }


  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <div className="columns">
        <Sidenav />
        <section className="column container">
          <h2 className="is-size-2">Add Session</h2>
          <form onSubmit={handleSubmit(this.onSubmit)}>

            <Field
              name="name"
              type="text"
              component={renderInput}
              label="Name"
            >
            </Field>
            <Field
              name="note"
              // type="text"
              component={renderTextarea}
              label="Notes"
            >
            </Field>
            <Field
              name="date"
              type="date"
              component={renderInput}
              label="Date"
            >
            </Field>
            <Field
              name="startTime"
              type="time"
              component={renderInput}
              label="Start"
            >
            </Field>
            <label className="label">Duration</label>
            <div className="field is-grouped">

              <Field
                name="durationHours"
                type="number"
                component={renderInput}
                label="H"
                normalize={greaterThan('min')}
              >
              </Field>
              <Field
                name="durationMinutes"
                type="number"
                component={renderInput}
                label="M"
                normalize={MnSecNormalizer('min', 'max')}
              >
              </Field>
              <Field
                name="durationSeconds"
                type="number"
                component={renderInput}
                label="S"
                normalize={MnSecNormalizer('min', 'max')}
              >
              </Field>
            </div>
            <label className="label">Pause</label>
            <div className="field is-grouped">

              <Field
                name="pauseHours"
                type="number"
                component={renderInput}
                label="H"
                normalize={greaterThan('min')}
              >
              </Field>
              <Field
                name="pauseMinutes"
                type="number"
                component={renderInput}
                label="M"
                normalize={MnSecNormalizer('min', 'max')}
              >
              </Field>
              <Field
                name="pauseSeconds"
                type="number"
                component={renderInput}
                label="S"
                normalize={MnSecNormalizer('min', 'max')}
              >
              </Field>
            </div>
            <label className="label">Categories</label>
            <CheckboxGroup name="categories" options={this.renderCategories()} />


            <Field
              name="project"
              type="select"
              component={renderProject}
              label="Project"
            >
               <option />
               {this.renderProjects()}
            </Field>

            <div>
              <button className="button" type="submit" >Save</button>
              <button className="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
            </button>
            </div>
          </form>
        </section>

      </div>
    )
  }
}
const mapStateToProps = ({ auth, categories,projects }) => ({
  auth, categories,projects
})
const mapDispatchToProps = (dispatch) => ({
  addSession: (session) => dispatch(addSession(session))
});
AddSession = connect(mapStateToProps, mapDispatchToProps)(AddSession)

export default reduxForm({
  form: 'sessionForm',
  validate,
  initialValues: { min: '-1', max: '60' }
})(AddSession)