import React from 'react'
import {Field, reduxForm} from 'redux-form'
import Upload from '../Upload/Upload'
import './UserForm.css';

// render input for redux form Fields
const RenderInput = ({input, label, type, meta: {touched, error}}) =>
  <div className={touched && error ? "uform-input-block has-error" : "uform-input-block" }>
    <label className="uform-label">{label}</label>
    <input {...input}
           placeholder={label}
           type={type}
           className={touched && error ? "uform-input is-invalid" : "uform-input" }
    />
    {touched && error && <div className="uform-invalid-msg">{error}</div>}
  </div>

// Render user form component
const UserForm = props => {
  const {handleSubmit, pristine, submitting, updateAvatar, displayUploader, toggleUploader, uFormSubmit} = props
  return (
    <div className="uform">

      {displayUploader ?

        <div>
          <Upload updateAvatar={updateAvatar} toggleUploader={toggleUploader}/>
        </div>

        :

        <form className="uform-form" onSubmit={handleSubmit(uFormSubmit)} >

          <div className="uform-header">
            <h3 className="uform-header-title">Personal Details</h3>
          </div>

          <div className="uform-fields">

            <Field
              component={RenderInput}
              name="firstName"
              label="First Name"
              type="text"
            />

            <Field
              name="lastName"
              component={RenderInput}
              type="text"
              label="Last Name"
            />

            <Field
              name="email"
              component={RenderInput}
              type="email"
              label="Email"
            />

            <Field
              name="telephone"
              component={RenderInput}
              type="text"
              label="Phone"
            />

          </div>

          <div className="uform-header">
            <h3 className="uform-header-title">Address</h3>
          </div>

          <div className="uform-fields">

            <Field
              name="housename"
              component={RenderInput}
              type="text"
              label="House name or #"
            />

            <Field
              name="street"
              component={RenderInput}
              type="text"
              label="Street"
            />

            <Field
              name="suburb"
              component={RenderInput}
              type="text"
              label="Suburb"
            />

            <Field
              name="state"
              component={RenderInput}
              type="text"
              label="State"
            />

            <Field
              name="postcode"
              component={RenderInput}
              type="text"
              label="Postcode"
            />

            <Field
              name="country"
              component={RenderInput}
              type="text"
              label="Country"
            />

          </div>

          <div className="uform-controls">
            <div className="uform-controls-block">
              <button className="uform-btn" type="button"
                      onClick={e => {
                        toggleUploader()
                        e.preventDefault()
                      }}>
                Upload Avatar
              </button>
            </div>
            <div className="uform-controls-block">
              <button className="uform-btn uform-btn-pmy" type="submit" disabled={pristine || submitting}>
                Create hCard
              </button>
            </div>
          </div>
        </form>
      }
    </div>
  )
}


const validate = values => {
  const errors = {}

  let requiredFields = ['firstName', 'lastName', 'email', 'telephone', 'housename', 'street', 'state', 'suburb', 'postcode', 'country', 'avatarFile']

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'This field is required'
    }
  })
  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.postcode) {
    errors.postcode = 'This field is required'
  } else if (isNaN(Number(values.postcode))) {
    errors.postcode = 'Must be a number'
  }
  return errors
}


export default reduxForm({
  form: 'user',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: {}
})(UserForm)